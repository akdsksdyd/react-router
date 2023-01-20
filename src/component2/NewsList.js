import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsArticle from "./NewsArticle";

import styled from './NewsList.module.css'; //css

const NewsList = () => {

    //1.API가져오기
    //83bf9c32b68e472c9464b18f38b27477

    //5.라우터로 들어오는 값 처리
    const {category} = useParams();
    // console.log(result);

    //category가 없거나 undefined이면 all로 할당
    const query = (category || 'all') === 'all' ? '' : `&category=${category}`;
    console.log(query);

    //2. useEffect에서 화면 로딩시 데이터처리

    const[data, setData] = useState();

    useEffect(() => {

        (async () => {

            const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=83bf9c32b68e472c9464b18f38b27477`;
    
            let {data: {articles}} = await axios.get(url);

            setData(articles);
            setLoading(true); //로딩완료

        })();

    }, [query]) //6. 변화가 일어 날 때 마다 재실행 할 변수

    //3. 데이터 로딩처리(데이터가 오기전에 state는 undefined)
    const [loading, setLoading] = useState(false);
    
    if(loading === false){
        return <div>로딩중..</div>
    }

    //4. li태그를 컴포넌트로 변경

    return(
        <div className={styled.news_container}>
            <h3>오늘의 헤드라인</h3>
            <ul className={styled.news_wrap}>
                {
                    data.map((item, index) => <NewsArticle key={index+1} item={item}/>)
                }
            </ul>
        </div>
    )
    
}

export default NewsList;