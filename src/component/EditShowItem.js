import React from "react";
import 'bulma'

class EditShowItem extends React.Component {
    state = {
        text: "",
        mouseIn: false,
        showBar: false
    }

    render() {
        return (
            <div style={{textAlign: "right"}}
                 onMouseOver={() => this.setState({mouseIn: true})}
                 onMouseOut={() => this.setState({mouseIn: false})}>
                <textarea value={this.state.text} placeholder={"新建一条数据"} rows="2" class={"textarea"}
                          onFocus={() => this.setState({showBar: true})}
                          onBlur={() => this.setState({showBar: this.state.mouseIn || false})}//需要和button组合判断是否设置为false
                          onChange={(e) => this.setState({text: e.target.value})}/>
                <div style={{
                    borderStyle: "solid",
                    borderWidth: "0px 1px 1px 1px",
                    borderColor: "blue",
                    display: this.state.showBar ? "block" : "none"
                }}>
                    <button class={["button is-info",].join(" ")} style={{textAlign: "right"}}
                            onClick={() => {
                                // this.props.onSave(this.state.text)
                            }}>保存
                    </button>
                </div>
            </div>
        )
    }
}

// this.props.isLoading?"is-loading":""
export default EditShowItem