import React, { Component } from "react";


class Tasks extends Component{
   state={
          loading:true,
          storageData:[],
          items:[],
          index:3
         };
    async componentDidMount(){
        const url="http://jsonplaceholder.typicode.com/todos";
        let response=await fetch(url);
        let item=await response.json();
        this.setState({items:item,loading:false});
        let data=this.state.items.slice(0,this.state.index);
        this.setState({storageData:data});
        localStorage.setItem("TODO",JSON.stringify(data)); 
    };
    onRemoveItem = i => {
        const list = this.state.storageData.filter((item, j) => i !== j);
        this.setState( {storageData:list,index:this.state.index-1});
        localStorage.setItem("TODO",JSON.stringify(list));
      };
      onAddItem=i=>{
        let additem=this.state.items.slice(0,this.state.index+1);
        localStorage.setItem("TODO",JSON.stringify(additem));
        this.setState({storageData:JSON.parse(localStorage.getItem("TODO")),index:this.state.index+1});
      }
      
    render(){
        if(this.state.loading || !this.state.items)
        {
            return (
                <div>Loading.....</div>
            );
        }
        else{
            return(
                <div style={{marginTop:30}}>
                    {this.state.storageData.map((data,index)=>(
                      <div className="container" key={data.id}>
                      <div className="row">
                          <div className="col-sm-3 col-lg-3 col-md-3 col-xl-3 text-dark">
                          {data.id}
                          </div>
                          <div className="col-sm-3 col-lg-3 col-md-3 col-xl-3 text-primary">
                          {data.title}
                          </div>
                          <div className="col-sm-3 col-lg-3 col-md-3 col-xl-3">
                           {data.completed}
                          </div>
                          <div className="col-sm-3 col-lg-3 col-md-3 col-xl-3">
                           <button type="submit" className="btn btn-sm btn-danger"
                           onClick={(e)=>this.onRemoveItem(index)}
                           >DELETE</button>
                          </div>
                      </div>
                      <hr/>
                  </div>
                    ))}
                      <div className="row">
                          <div className="col-sm-3 col-lg-3 col-md-3 col-xl-3" style={{marginLeft:200}}>
                              <br/>
                               <button type="submit" className="btn btn-md btn-success"
                               onClick={(e)=>this.onAddItem(this.state.index)}
                                >Add Task</button>
                            </div>
                          </div>
                     </div>
                );
           }
      }
};
export default Tasks;