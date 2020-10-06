import React,{Component} from "react";
import SimpleReactValidator from "simple-react-validator";
import {history} from "../../shared/history/index";

class Login extends Component{
    constructor(){
        super();
        this.state={
            userEmail:"",
            userPassword:""
        }
        this.validator=new SimpleReactValidator({autoForceUpdate:this});
    };
    inputdata=e=>{
        this.setState({[e.target.name]:e.target.value});
    };
    handleFormSubmit=e=>{
        e.preventDefault();
        if(this.validator.allValid())
        { 
                localStorage.setItem("userEmail",this.state.userEmail);
                localStorage.setItem("userPassword",this.state.userPassword);
        }
        else{
            this.validator.showMessages();
            this.forceUpdate();
        }
        let uid=localStorage.getItem("userEmail");
        let pswd=localStorage.getItem("userPassword");
        if(uid===this.state.userEmail && pswd===this.state.userPassword){
            history.push("/header");
            window.location.reload();
        }
        else{
        }
    };
  render()
      { 
        return(
        
          <div className="container">
              <div className="row" style={{marginTop:"20px"}}>
              <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-3 mx-auto text-success">
                  <form onSubmit={this.handleFormSubmit}>
                   <h2>Please Sign In</h2>
                       <hr/>
                       <div className="form-group">
                            <label>User Email</label><br/>
                            <input type="email" name="userEmail" 
                            className="form-control input-lg" placeholder="Email Address"
                            value={this.state.userEmail}
                            onChange={this.inputdata}/>
                            {this.validator.message("Email Id",this.state.userEmail,"required|email")}
                        </div>
                        <div className="form-group">
                        <label>Password</label><br/>
                            <input type="password" name="userPassword"  
                            className="form-control input-lg" placeholder="Password"
                            value={this.state.userPassword}
                            onChange={this.inputdata}
                            />
                            {this.validator.message("Password",this.state.userPassword,"required|min:5|max:25")}
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 mx-auto">
                                <input type="submit" className="btn btn-md btn-success btn-block" 
                                 value="Login"
                                />
                            </div>
                        </div>
                     </form>
                  </div>
              </div>
          </div>

      );
    }
};
export default Login;