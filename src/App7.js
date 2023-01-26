import A from "./component3/A";
import B from "./component3/B";
import { UserProvider } from "./contexts/ContextAPI2";


const App = () => {

    /* 
    1. 외부 ContextAPI2의 컨슈머,프로바이더 export
    2. root 에서는 export된 프로바이더로 감싼다
    3. 자식 컴포넌트에서는 useContext(프로젝트명)을 이용해 데이터를 핸들링
    */

    return (
            <UserProvider>
                <A/>
                <B/>
            </UserProvider>
    )

}

export default App;