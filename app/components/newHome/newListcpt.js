import React, {Component} from "react";
import bootstrap from "../../static/bootstrap/css/bootstrap.min.css"
import style from "./style.less"
class NewListcpt extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    render() {
        let listStr = (item, index) => {

            let str = "";
            if (item.imageurls.length === 3) {
                console.log("图片数量", item.imageurls.length)
                str = <div key={index} className={bootstrap.row}>
                    <div  className={`${bootstrap["col-xs-12"]} ${style.new_tile}`}>{item.title}</div>
                    <div className={bootstrap["col-xs-12"]}>
                        <div key={index} className={bootstrap.row}>
                            {item.imageurls.map((item, index) => {
                                return (

                                    <div className={bootstrap["col-xs-4"]}>
                                        <img className={bootstrap["img-responsive"]} src={item.url_webp}/>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
            }
            return str;
        }

        return (
            <React.Fragment>
                <div className={`${bootstrap.container}`}>
                    {this.props.data.map((item, index) => listStr(item, index))}

                </div>
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.setState({
            list: this.state.list.concat(this.props.data)
        })
    }


}

export default NewListcpt;
