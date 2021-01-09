import React from "react";
import 'bulma'

class EditShowItem extends React.Component {
    state = {
        text: "",
        saving: false,//保存按钮状态
        showHeadRight: false,
    }

    render() {
        return (
            <div style={{textAlign: "right"}}
                 onClick={(event) => {
                     event.stopPropagation()
                 }}>
                <div
                    onMouseEnter={() => this.setState({showHeadRight: true})}
                    onMouseLeave={() => this.setState({showHeadRight: false})}
                >
                    <i style={{
                        width: "0px",                 /*  宽高设置为0，很重要，否则达不到效果 */
                        height: "0px",
                        float: "right",
                        marginBottom: "-9px",
                        border: "13px solid yellow",
                        borderBottomColor: "transparent",    /* 设置透明背景色 */
                        borderLeftColor: "transparent",
                        borderRightColor: "transparent",
                    }}/>
                    <div
                        style={{
                            display: this.state.showHeadRight ? "block" : "none",
                            marginTop: "16px",
                            position: "absolute",
                            right: "0px",
                            zIndex: 1,
                        }}
                    >
                        <button class="button is-text is-small">置顶</button>
                        <button class="button is-text is-small">删除</button>
                    </div>
                </div>
                <textarea
                    value={this.state.text} placeholder={"新建一条数据"}
                    rows="2" class={"textarea"}
                    onClick={(event) => {
                        event.stopPropagation()
                        this.props.onItemClick()
                    }}
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
                    <button class={["button is-info", this.state.saving ? "is-loading" : ""].join(" ")}
                            style={{textAlign: "right"}}
                            onClick={() => {
                                this.setState({saving: true})
                                let that = this

                                async function saving() {
                                    let ok = await that.props.onSaveClick(that.state.text);
                                    that.setState({saving: false})
                                    if (ok) {
                                        that.setState({text: ""})
                                    }
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

export default EditShowItem