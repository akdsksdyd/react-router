import { /*useLocation,*/ useSearchParams } from "react-router-dom";


const User = () => {

    //쿼리스트링으로 넘어오는 값을 받기
    //1 - useLocation훅
    // const location = useLocation();
    // console.log(location); //객체안에 쿼리스트링 값은 분해해서 사용

    //2 - useSerachParams 훅
    //배열반환 [값을 조회하거나 수정하는 get set, 쿼리스트링을 업데이트하는 객체]
    const [obj, setObj] = useSearchParams();

    let id = obj.get("id");
    let age = obj.get("age");
    console.log(id);
    console.log(age);

    const handleClick = () => {
        let num = parseInt(age) + 1; //age값에 1을 더한다.
        setObj({id: '변경', age: num});
    }

    return(
        <>
            <h3>유저화면..</h3>
            
            쿼리스트링으로 넘어온 id: {id} <br/>
            쿼리스트링으로 넘어온 age: {age} <br/>

            <button type="button" onClick={handleClick}>쿼리스트링 강제수정</button>

        </>
    )

}

export default User;