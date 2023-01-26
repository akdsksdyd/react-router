import { useState } from "react";
import ColorComponent from "./component3/ColorComponent";
import ColorContext from "./contexts/ContextAPI";


const App = () => {

    /* 
    p.495
    1. ContextAPI 외부에 선언 createContext() 훅사용
    2. 자식 컴포넌트 consumer로 데이터 받기
    3. 부모 컴포넌트 provider로 데이터를 전달(변경)
    */
   
    //select태그를 만들고 useState를 활용해 color값을 변경.

    const [color, setColor] = useState('black');
    const handleChange = (e) => {
        setColor(e.target.value);
    }

    return(
        <ColorContext.Provider  value={{color: color}}>
            {/* Provider는 사용 할 root컴포넌트에 선언한다. */}
            <select onChange={handleChange}>
                <option value='black'>선택</option>
                <option value='blue'>blue</option>
                <option value='red'>red</option>
            </select>
            <ColorComponent/>
        </ColorContext.Provider>
    )

}

export default App;