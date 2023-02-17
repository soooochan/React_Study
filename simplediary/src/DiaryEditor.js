import {useState} from "react";


const DiaryEditor = () =>{
    const [state, setState] = useState({
        author:"",
        content:""
    })

    const handleChangeState = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);

        setState({
            ...state,
            [e.target.name] : e.target.value,

        })
    }

    return <div classname="DiaryEditor">

        <h2>오늘의 일기</h2>
        <input name ="author"value= {state.author} 
            onChange={handleChangeState}/>
        <div>
            <textarea name = "content" value={state.content} 
            onChange={handleChangeState}/>
        </div>

        <div>
            <textarea name = "content" value={state.content} 
            onChange={handleChangeState}/>
        </div>
    </div>;
};
export default DiaryEditor;