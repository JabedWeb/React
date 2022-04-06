import { student } from "./data"
import SingleClass from "./SingleClass"
//import SingleDevs from "./SingleDevs"
const devs=(tile,content)=>{
    return (

        <>
    <div className="container mt-5">

        <div className="row">

            <h1>{tile}</h1>
            <p>{content}
            </p>
        </div>
    <div className="row">
        {
        student.map((data,index)=>
    //    <SingleDevs name={data.name} Skill={data.Developer} photo={data.img} />
    <SingleClass name={data.name} Skill={data.Developer} photo={data.img}/>
        )
        }
    
    </div>
    </div>
        
        </>
    )
}

export default devs


