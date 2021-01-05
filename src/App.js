import './App.css';
import EditShowItem from "./component/EditShowItem";
import React, {Component} from "react";
import EditShowItemWithHead from "./component/EditShowItemWithHead";

class App extends Component {
    state={
        showBar: false,
        isLoading:false
    }
    render() {
        return (
            <div className="App-header" onClick={()=>this.setState({showBar:false})}>
                <EditShowItem showBar={this.state.showBar} showBarFunc={()=> {
                    this.setState({showBar: true})
                }} onSave={(text)=> {
                    console.log(text)
                    this.setState({isLoading:true})
                    setTimeout(()=>this.setState({isLoading:false}),1000)
                }} isLoading={this.state.isLoading}/>

                <EditShowItemWithHead/>
            </div>
        );
    }
}

export default App;
