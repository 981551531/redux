import React, {Component} from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import homeSer from '../../../fetch/Home/homeSer'
import NewListcpt from '../../../components/newHome/NewListcpt'
import LoadMorecpt from '../../../components/newHome/loadMorecpt'
import {Link} from 'react-router-dom'

import * as newListActions from '../../../actions/newInfo'

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

        return (
            <React.Fragment>

                <NewListcpt goToDetailFn={this.goToDetailFn.bind(this)}
                            dataList={this.props.newsList.dataList}></NewListcpt>
                <LoadMorecpt isLoadingMore={this.state.isLoadingMore}
                             loadMoreFn={this.getMoreDataHanler.bind(this)}></LoadMorecpt>

            </React.Fragment>
        )
    }

    async componentDidMount() {
        if (!this.props.newsList.dataList) {


            await this.getNewList();
        }

    }

    async getMoreDataHanler() {

        await this.getNewList();
    }

    async getNewList() {
        this.setState({
            isLoadingMore: true
        })
        let data = await newhome.getNewsList(101);
        let list = data.data.news;
        let oldList = this.props.newsList.dataList;
        console.log("oldList", oldList)
        if (oldList) {
            console.log("总数", this.props.newsList.dataList.length)
            this.props.newListActions.add({
                dataList: oldList.concat(list)
            })
        } else {
            this.props.newListActions.add({
                dataList: list
            })
        }

        console.log("智能组件", this.props.newsList.dataList)
        this.setState({
            newList: this.state.newList.concat(this.props.newsList.dataList),
            isLoadingMore: false
        })


    }

    goToDetailFn(nid) {
     this.props.goToDetailRootFn(nid);
    }

}


function mapStateToProps(state) {
    return {
        newsList: state.newsList
    }
}

function mapDispatchToProps(dispatch) {
    return {newListActions: bindActionCreators(newListActions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewList)
