import Images from "./imageList";
const redCard = ()=>{
    return(
        <>
        {Images.map((item)=>  
            <div key={item.id===1}>
             <img src={item.name}/>
            </div>
        )}
        </>
    )  
}
export default redCard;

// const buleCard = ({name, clicked})=>{
//     return(
        
//     )
// }