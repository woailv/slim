import React from "react";
import 'bulma'

class EditShowItem extends React.Component {
   state={
       text:""
   }
    render() {
        return (
            <div style={{textAlign: "right"}} onClick={(e) => e.stopPropagation()}>
                <textarea value={this.state.text} placeholder={"新建一条数据"} rows="2" class={"textarea"} onFocus={() => this.props.showBarFunc()}
                onChange={(e)=>this.setState({text:e.target.value})}/>
                <div style={{
                    borderStyle: "solid",
                    borderWidth: "0px 1px 1px 1px",
                    borderColor: "blue",
                    display: this.props.showBar ? "block" : "none"
                }}>
                    <button class={["button is-info", this.props.isLoading?"is-loading":""].join(" ")} style={{textAlign: "right"}} disabled={this.props.isLoading}
                            onClick={() => {
                                this.props.onSave(this.state.text)
                            }}>保存
                    </button>
                </div>
            </div>
        )
    }
}

export default EditShowItem