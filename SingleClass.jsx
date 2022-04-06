import { Component } from "react";

class SingleClass extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const {name,skill,photo}=this.props;
        return (

            <div className="col-md-3">
                        <div className="card">
                        <div className="card-body">
                            
                            <img width={300} height={200}  src={photo} alt="BigCo Inc. logo"/>
                            <h1>{name}</h1>
                            <h5>{skill}</h5>
                            <h5>Mirpur</h5>
                        </div>
                        </div>
                        </div>
            
                )
    }
}

export default SingleClass