import React, {Component} from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import homeSer from '../../../fetch/Home/homeSer'
import NewListcpt from '../../../components/newHome/NewListcpt'
import LoadMorecpt from '../../../components/newHome/loadMorecpt'

import * as myTestAction from '../../../actions/myTest'

let newhome = new homeSer();

class NewList extends Component {
    constructor() {
        super();
        this.state = {
            isLoadingMore: false,
            newList: []
        }


    }

    render() {
        if (this.props.myTest.a) {


            console.log("55555", this.props.myTest.a.name)
        }
        return (
            <React.Fragment>
                <div><h1>打印数据<b>
                    {
                        this.props.myTest.a&&this.props.myTest.a.name
                    }
                </b></h1></div>
                <NewListcpt data={this.state.newList}></NewListcpt>
                <LoadMorecpt isLoadingMore={this.state.isLoadingMore}
                             loadMoreFn={this.getMoreDataHanler.bind(this)}></LoadMorecpt>
            </React.Fragment>
        )
    }

    async componentDidMount() {
        await this.getNewList();

    }

    async getMoreDataHanler() {
        console.log("44444444444");
        await this.getNewList();
    }

    async getNewList() {
        let data = await newhome.getNewsList(101);
        let list = data.data.news;
        let a = {
            name: "潘国臣"
        };
        // a = JSON.stringify(a)
        this.props.myTestAction.update({
            a
        })
        this.setState({
            newList: this.state.newList.concat(data.data.news)
        })


    }

}


function mapStateToProps(state) {
    return {
        myTest: state.myTest
    }
}

function mapDispatchToProps(dispatch) {
    return {myTestAction: bindActionCreators(myTestAction, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewList)
