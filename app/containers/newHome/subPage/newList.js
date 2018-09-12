import React, {Component} from "react";
import homeSer from '../../../fetch/Home/homeSer'
import NewListcpt from '../../../components/newHome/NewListcpt'

let newhome = new homeSer();

class NewList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            newList: []
        }


    }

    render() {
        return (
            <React.Fragment>
                  <NewListcpt data={this.state.newList}></NewListcpt>
            </React.Fragment>
        )
    }

    async componentDidMount() {
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
