import './App.css';
import EditShowItem from "./component/EditShowItem";
import React, {Component} from "react";

// const mock = [
//     {text:"text1"},
//     {text:"text2"},
//     {text:"text3"},
// ]

class App extends Component {
    state = {
        showBar: false
    }
    render() {
        return (
            <div className="App-header" onClick={() => this.setState({showBar: false})}>
                <EditShowItem
                    showBar={this.state.showBar}
                    onItemClick={() => {
                        this.setState({showBar: true})
                    }}
                    onSave={() => {
                    }}
                />


                {/*<EditShowItemWithHead/>*/}
            </div>
        );
    }
}


export default App;
