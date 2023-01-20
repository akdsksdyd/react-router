import axios from "axios";
import { useState } from "react";


const App = () => {
    
    /* 
    Axios는 비동기를 편하게 처리하는 라이브러리다. (fetch로 사용해도 무방)
    -설치 npm add axios
    -Axios는 get(), post()함수를 제공하고, 사용했을 때 리턴은 Promise

    비동기적 방식은 순서를 보장 해 주지 않는다.

    */

    const [data, setData] = useState();

    /* 
    async, await의 장점
    1. 코드가 간결해짐.
    2. 동기적인 호출방식을 보장.
    */
    const handleClick = async () => {

        let result = await axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json");
        console.log(result);

        console.log(1);
        
        let result2 = await axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json");
        console.log(result2);

        console.log(2);
        
        let result3 = await axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json");
        console.log(result3);
        
        console.log(3);

        //순서를 보장받기 위해서 ?
        //콜백지옥
        /*
        axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
        .then(response => {
            console.log(response.data);
            console.log(1);

            axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json")
            .then(response => {
                console.log(response.data);
                console.log(3);

                axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json")
                .then(response => {
                    console.log(response.data)
                    console.log(5);
                });

            });
            
        });
        */

        //순서를 보장하지않음.
        /*
        axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
        .then(response => {
            console.log(response.data);
            console.log(1);
        })
        
        console.log(2);

        axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json")
        .then(response => {
            console.log(response.data);
            console.log(3);
        });
        
        console.log(4);

        axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json")
        .then(response => {
            console.log(response.data)
            console.log(5);
        });
        
        console.log(6);
        */
    }

    return(
        <>
            <h3>엑시오스 데이터 가져오기</h3>

            <button onClick={handleClick}>데이터가져오기</button>

            {
                data && //data값이 있으면 가져오고 없으면 안가져옴.
                <div>
                    아이디: {data.userId}<br/>
                    비번: {data.userPw}<br/>
                    이름: {data.userName}
                </div>
            }

        </>
    )

}

export default App;