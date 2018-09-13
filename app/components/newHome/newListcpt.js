import React, {Component} from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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
      /*  let listStr = (item, index) => {

            let str = "";
            if (item.imageurls.length === 3) {
                console.log("图片数量", item.imageurls.length)
                str = <div key={index} className={`${bootstrap.row} ${style.new_list_box}`}>
                    <div className={`${bootstrap["col-xs-12"]} ${style.new_tile}`}>{item.title}</div>
                    <div className={bootstrap["col-xs-12"]}>

                            {item.imageurls.map((item, index) => {
                                return (

                                    <div className={bootstrap["col-xs-4"]}>
                                        <img className={style["img_responsive"]} src={item.url_webp}/>
                                    </div>

                                )
                            })}

                    </div>
                </div>
            }
            else if (item.imageurls.length === 1) {


                str = <div key={index} className={`${bootstrap.row} ${style.new_list_box}`}>
                    <div className={bootstrap["col-xs-4"]}>
                        {item.imageurls.map((item, index) => {
                            return (
                                <img key={index} className={style["img_responsive"]} src={item.url_webp}/>
                            )


                        })}
                    </div>
                    <div className={`${bootstrap["col-xs-8"]} ${style.new_tile}`}>{item.title}</div>
                </div>
            }
            else {
                str = <div key={index} className={`${bootstrap.row} ${style.new_list_box}`}>

                    <div className={`${bootstrap["col-xs-12"]} ${style.new_tile}`}>{item.title}</div>
                </div>
            }
            return str;
        }*/

        return (
            <React.Fragment>
               {/* <div className={`${bootstrap["container"]}`}>
                    {this.props.data.map((item, index) => listStr(item, index))}

                </div>*/}
                <div>fsdfd{this.props.myTest.namew} </div>
            </React.Fragment>
        )
    }

    componentDidMount() {
        console.log("111111111",this.props.newList11)
    }
}


function mapStateToProps(state) {
    return {
        myTest: state.myTest
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewListcpt)



 
   