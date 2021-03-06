import React, {Component} from "react";
import bootstrap from "../../static/bootstrap/css/bootstrap.min.css"
import style from "./style.less"

class NewStyleList extends Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        let tagStr = (item, index) => {
            let str = "";

            if (index === 3) {

                str =
                    <React.Fragment>
                        <div
                            className={`${bootstrap["col-xs-3"]} ${bootstrap["text-center"]} ${style.more_tag}`}
                            onClick={this.showMoreTagClickHandler.bind(this)}>{this.props.isMoreData ? "收起∧" : "更多∨"}</div>
                        <div style={this.props.isMoreData ? {display: "block"} : {display: "none"}} key={item.cate_id}
                             className={`${bootstrap["col-xs-3"]} ${bootstrap["text-center"]} ${style.item}`}>{item.name}</div>
                    </React.Fragment>


            } else {
                if (index < 3) {

                    str = <div key={item.cate_id}
                               className={`${bootstrap["col-xs-3"]} ${bootstrap["text-center"]} ${style.item}`}>{item.name}</div>

                } else {

                    str = <div style={this.props.isMoreData ? {display: "block"} : {display: "none"}} key={item.cate_id}
                               className={`${bootstrap["col-xs-3"]} ${bootstrap["text-center"]} ${style.item}`}>{item.name}</div>

                }
            }
            return str;

        }
        return (

            <div style={this.props.isMoreData ? {height: "auto"} : {height: "33px"}}
                 className={`${bootstrap.container} ${style.new_tag} `}>
                <div className={bootstrap.row}>

                    {this.props.data.map((item, index) => tagStr(item, index))}

                </div>
            </div>


        )
    }

    showMoreTagClickHandler() {
        this.props.showMoreTagHandler()

    }

}

export default NewStyleList;
