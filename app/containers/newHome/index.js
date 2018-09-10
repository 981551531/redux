import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'   ;
import {Link} from 'react-router-dom'
import homeSer from '../../fetch/Home/homeSer'

let newhome=new homeSer();
class newHome extends React.Component {
    render() {
        return (
            <div>
                新闻首页

            </div>
        )
    }

       componentDidMount() {
             //获取新闻类别
         this.getNewType();

    }

     getNewType(){
         newhome.getNewsType();
    }

        updateCityHandler() {

    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(newHome);