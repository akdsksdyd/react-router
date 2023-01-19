import { Link, NavLink, Outlet } from "react-router-dom";


const Board = () => {

    const myStyle = {color: 'red', backgroundColor: "yellow"}

    return(
        <>
            <h3>글 목록페이지</h3>

            <ul>
                {/* <li><Link to="/board/1">글1</Link></li>
                <li><Link to="/board/2">글2</Link></li>
                <li><Link to="/board/3">글3</Link></li> */}

                {/* 
                NavLink는 {isActive: boolean}을 함수의 매개변수로 사용 할 수 있게
                전달 해 준다.
                반드시 {isActive}변수로 구조 분해 할당 해야한다.
                */}

                <li><NavLink to="/board/1" style={({isActive}) => isActive ? myStyle : undefined}>글1</NavLink></li>
                <li><NavLink to="/board/2" style={({isActive}) => isActive ? myStyle : undefined}>글2</NavLink></li>
                <li><NavLink to="/board/3" style={({isActive}) => isActive ? myStyle : undefined}>글3</NavLink></li>
            </ul>

            {/* 하위 라우터가 표기된다. */}
            <Outlet/>

        </>
    )

}

export default Board;