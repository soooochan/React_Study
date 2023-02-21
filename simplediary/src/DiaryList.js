import DiaryItem from './DiaryItem';


const DiaryList = ({onEdit, onRemove, diaryList}) =>{
    console.log(diaryList);
    return <div className ="DiaryList">
        <h2>일기 리스트</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
        <div>
            {diaryList.map((it,idx)=>(
            <DiaryItem key={it.id} {...it} onDelete = {onRemove}/>            
            ))}
        </div>
    </div>
};

//defaultProps 쓰는 이유 : undefined가 들어가서 에러가 생길 경우를 대비하여 
DiaryList.defaultProps = {
    diaryList:[]

}
export default DiaryList;