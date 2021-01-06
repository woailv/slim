import './App.css';
import EditShowItem from "./component/EditShowItem";
import React, {Component} from "react";

// const mock = [
//     {text:"text1"},
//     {text:"text2"},
//     {text:"text3"},
// ]

class App extends Component {
    render() {
        return (
            <div className="App-header" onClick={() => this.setState({showBar: false})}>
                <EditShowItem/>


                {/*<EditShowItemWithHead/>*/}
            </div>
        );
    }
}


export default App;
