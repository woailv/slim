import React from "react";
import EditShowItem from "./EditShowItem";

class EditShowItemWithHead extends React.Component {
    state = {
        showBar: true
    }

    render() {
        return (
            <div class={"App-header"} onClick={() => this.setState({showBar: false})}>
                <span>操作</span>
                <EditShowItem
                    showBar={this.state.showBar}
                    onClick={() => {
                        this.setState({showBar: true})
                    }}
                    onSave={() => {
                    }}
                />
            </div>
        )
    }
}

export default EditShowItemWithHead