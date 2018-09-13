import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'   ;
import {Link} from 'react-router-dom'    ;
import NewTagStyle from './subPage/newTagStyle'
import NewList from './subPage/NewList'

import style from './index.less'


class newHome extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <NewTagStyle/>
                <NewList className={style.font_color}> 新闻首页</NewList>
              
            </React.Fragment>
        )
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