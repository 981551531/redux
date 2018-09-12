import React from 'react'
import NewStyleList from '../../../components/newHome/newStyleList'
import style from './index.less'
import bootstrap from '../../../static/bootstrap/css/bootstrap.css'
import homeSer from '../../../fetch/Home/homeSer'

let newhome = new homeSer();

class NewTagStyle extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            isMoreData: false
        }

    }

    render() {
        return (

            <React.Fragment>
                <NewStyleList showMoreTagHandler={this.showMoreTagHandler.bind(this)} data={this.state.data}
                              isMoreData={this.state.isMoreData}/>
            </React.Fragment>

        )
    }

    async componentDidMount() {
        await  this.getNewType();
    }

    async getNewType() {
        let data = await  newhome.getNewsType();
        let tag = data.data.tag;

        this.setState({

            // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
            data: this.state.data.concat(tag)
        })

    }

    showMoreTagHandler() {
        this.setState({


            isMoreData: !this.state.isMoreData
        })
    }

}

export default NewTagStyle