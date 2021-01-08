import React from "react";
import 'bulma'

class EditShowItem extends React.Component {
    state = {
        text: "",
        saving:false,
    }

    render() {
        return (
            <div style={{textAlign: "right"}}
                 onClick={(event) => {
                     event.stopPropagation()
                     this.props.onItemClick()
                 }}>
                <textarea
                    value={this.state.text} placeholder={"新建一条数据"}
                    rows="2" class={"textarea"}
                    onChange={(e) => this.setState({text: e.target.value})}
                />
                <div
                    style={{
                        borderStyle: "solid",
                        borderWidth: "0px 1px 1px 1px",
                        borderColor: "blue",
                        display: this.props.showBar ? "block" : "none"
                    }}
                >
                    <button class={["button is-info",this.state.saving?"is-loading":""].join(" ")} style={{textAlign: "right"}}
                            onClick={() => {
                                this.setState({saving:true})
                                let that = this
                                async function saving(){
                                    await that.props.onSaveClick(that.state.text);
                                    that.setState({saving:false})
                                }
                                saving()
                            }}>
                        保存
                    </button>
                </div>
            </div>
        )
    }
}

// this.props.isLoading?"is-loading":""
export default EditShowItem