import React, {Component} from "react";
import homeSer from '../../../fetch/Home/homeSer'
import NewListcpt from '../../../components/newHome/NewListcpt'
import LoadMorecpt from '../../../components/newHome/loadMorecpt'

let newhome = new homeSer();

class NewList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoadingMore:false,
            newList: []
        }


    }

    render() {
        return (
            <React.Fragment>
                <NewListcpt data={this.state.newList}></NewListcpt>
                <LoadMorecpt isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.getMoreDataHanler.bind(this)}></LoadMorecpt>
            </React.Fragment>
        )
    }

    async componentDidMount() {
        await this.getNewList();
    }
    async  getMoreDataHanler(){
          console.log("44444444444")  ;
        await this.getNewList();
    }
    async getNewList() {
        let data = await newhome.getNewsList(101);
        let list = data.data.news;

        this.setState({
            newList: this.state.newList.concat(data.data.news)
        })
        console.log(this.state.newList)


    }

}

export default NewList;
