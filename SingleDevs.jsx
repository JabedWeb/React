function SingleDevs(props){

    return (

<div className="col-md-3">
            <div className="card">
            <div className="card-body">
                
                <img width={290} height={200} src={props.photo} alt="BigCo Inc. logo"/>
                <h1>{props.name}</h1>
                <h5>{props.Skill}</h5>
                <h5>Mirpur</h5>
            </div>
            </div>
            </div>

    )
}

export default SingleDevs