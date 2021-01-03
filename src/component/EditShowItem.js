import React from "react";
import 'bulma'

class EditShowItem extends React.Component {
    state = {
        showSave: false
    }

    render() {
        return (
            <div style={{height:"1000px"}} onClick={()=>this.setState({showSave: false})}>
                <div style={{textAlign: "right"}} onClick={(event)=> event.stopPropagation()}>
                    <textarea placeholder={"新建一条数据"} rows="2" class={"textarea"} onFocus={(e) => {
                        this.setState({showSave: true})
                    }}/>
                    <div style={{
                        borderStyle: "solid",
                        borderWidth: "0px 1px 1px 1px",
                        borderColor: "blue",
                        display: this.state.showSave ? "block" : "none"
                    }}>
                        <button class="button is-info" style={{textAlign: "right"}}>保存</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditShowItem