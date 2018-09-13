import React, {Component} from "react";
import bootstrap from "../../static/bootstrap/css/bootstrap.min.css"
import style from "./style.less"

class LoadMorecpt extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={bootstrap.container}>
                    <div className={bootstrap.row}>
                        <div className={`${bootstrap["col-xs-12"]} ${bootstrap["text-center"]}`}>
                            {this.props.isLoadingMore ? "正在加载" :
                                <span onClick={this.getMoreDataClickHanler.bind(this)}>加载更多</span>}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    getMoreDataClickHanler() {
        this.props.loadMoreFn()
    }

}

export default LoadMorecpt;
