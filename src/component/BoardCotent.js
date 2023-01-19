import { useParams } from "react-router-dom";


const BoardContent = () => {

    let {num} = useParams();

    return (
        <>
            <h6>글 상세페이지..</h6>
            {num}번 글 내용..
        </>
    )

}

export default BoardContent;