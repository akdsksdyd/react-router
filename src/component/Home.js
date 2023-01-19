import { Link } from "react-router-dom";


const Home = () => {

    return(
        <>
            <h3>홈화면..</h3>

            <ul>
                <li><Link to="/user">회원페이지</Link></li>
                <li><Link to="/user?id=aaa123&age=1">회원페이지</Link></li>
                <li><Link to="/info/1">정보페이지</Link></li>
                <li><Link to="/info/2">정보페이지</Link></li>
                <li><Link to="/info/3">정보페이지</Link></li>
                
                {/*  */}
                <li><Link to="/board">보드페이지</Link></li>

                {/*  */}
                <li><Link to="/mypage">마이페이지</Link></li>
            </ul>
        </>
    )

}

export default Home;