import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'   ;
import {Link} from 'react-router-dom'    ;
import NewTagStyle from './subPage/newTagStyle'
import NewList from './subPage/NewList'
import * as myTestAction from '../../actions/myTest'
import style from './index.less'


class newHome extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <div>{this.props.myTest.namew}</div>
                <NewTagStyle/>
                <NewList className={style.font_color}> 新闻首页</NewList>

            </React.Fragment>
        )
    }

    componentDidMount() {
        this.props.myTestAction.update({namew: "潘国臣"})  ;


    }

    updateCityHandler() {

    }
}

function mapStateToProps(state) {
    return {
        myTest:state.myTest
    }
}

function mapDispatchToProps(dispatch) {
    return {myTestAction: bindActionCreators(myTestAction, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(newHome);