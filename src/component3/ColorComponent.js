import ColorContext from "../contexts/ContextAPI";


const ColorComponent = () => {

    return (
        <>
            <ColorContext.Consumer>
            {/* 사용할 곳 : Consumer - 함수의 return구문에 화면을 처리할 내용을 작성. */}
                {
                    (value) => (
                        <div>
                            ContextAPI의 사용 <br/>
                            값: {value.color}
                        </div>
                    )
                }
            </ColorContext.Consumer>
        </>
    )

}

export default ColorComponent;