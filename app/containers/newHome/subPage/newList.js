import React, {Component} from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import homeSer from '../../../fetch/Home/homeSer'
import NewListcpt from '../../../components/newHome/NewListcpt'
import LoadMorecpt from '../../../components/newHome/loadMorecpt'
import * as  newInfoAction from '../../../actions/newInfo'

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
                <div>{this.props.myTest.namew}</div>
                <NewListcpt data={this.state.newList}></NewListcpt>
                <LoadMorecpt isLoadingMore={this.state.isLoadingMore}
                             loadMoreFn={this.getMoreDataHanler.bind(this)}></LoadMorecpt>
            </React.Fragment>
        )
    }

    componentDidMount() {


    }

    async getMoreDataHanler() {
        console.log("44444444444");
        await this.getNewList();
    }

    async getNewList() {
        let data = await newhome.getNewsList(101);
        let list = data.data.news;

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
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewList)
