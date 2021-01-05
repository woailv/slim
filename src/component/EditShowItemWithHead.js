import React from "react";
import EditShowItem from "./EditShowItem";

class EditShowItemWithHead extends React.Component {
    state={
        showBar:false
    }
    render() {
        return (
            <div>
                <span>操作</span>
                <EditShowItem
                    showBar={this.state.showBar}
                    showBarFunc={()=>{this.setState({showBar:true})}}
                    onSave={()=>{}}
                />
            </div>
        )
    }
}

export default EditShowItemWithHead