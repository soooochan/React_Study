import React,{useRef, useState} from "react";

import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id:1,
//     author:"곽수찬",
//     content:"하이 1",
//     emotion:5,
//     created_date : new Date().getTime()
//   },
//   {
//     id:2,
//     author:"아무개",
//     content:"하이 2",
//     emotion:2,
//     created_date : new Date().getTime()
//   },
//   {
//     id:3,
//     author:"곽수찬",
//     content:"하이 3",
//     emotion:3,
//     created_date : new Date().getTime()
//   },
// ]
function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_data = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_data,
      id : dataId.current,
    }

    dataId.current += 1;
    setData([...data, newItem]);
  };

  const onDelete = (targetId)=>{
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it)=> it.id != targetId);
    setData(newDiaryList);
  }
  return (
    <div className="App">
     <DiaryEditor onCreate = {onCreate}/>
     <DiaryList onDelete = {onDelete} diaryList={data}/>
    </div>
  );
}

export default App;
