import React,{Component} from "react";
import Information from "./information";

class Dropdowns extends Component{
    constructor() {
        super();
        this.state = {
          selectValue: '' 
        }
      };
    handleOnChange=(e)=> {
        this.setState({selectValue:e.target.value});
      }
      handleFormSubmit=e=>{
        e.preventDefault();
      }
    render(){
        return(
            <div className="container">
            <div className="row">
               <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12">
               <form onSubmit={this.handleFormSubmit}>
                <select onChange={this.handleOnChange} id="classes"
                 style={{color:"black",fontSize:"20px",fontWeight:"1000"}}>
                <option>Select Options</option>
                <option value="Html">HTML</option>
                <option value="Css">CSS</option>
                <option value="Javascript">JAVASCRIPT</option>
                <option value="Bootstrap">BOOTSTRAP</option>
                <option value="Nodejs">NODEJS</option>
                <option value="Reactjs">REACTJS</option>
                </select>
                    <Information selVal={this.state.selectValue}/>
                </form>
                   </div>
                </div>
            </div>
        );
    }
};
export default Dropdowns;