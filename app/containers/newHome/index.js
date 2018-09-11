import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'   ;
import {Link} from 'react-router-dom'    ;
import NewTagStyle from './subPage/newTagStyle'
import homeSer from '../../fetch/Home/homeSer'
import style from './index.less'
let newhome = new homeSer();

class newHome extends React.Component {
    constructor(){
        super();
        this.state={
            
        }
    }
    render() {
        return (
            <div>
                  <NewTagStyle/>
               <div className={style.font_color}> 新闻首页</div>

            </div>
        )
    }

    async  componentDidMount() {
        //获取新闻类别
        let date = await  this.getNewType();
        console.log("在新闻首页中得到数据",date)

    }

    async getNewType() {
        return await newhome.getNewsType();
    }

    updateCityHandler() {

    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(newHome);