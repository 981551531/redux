import React from 'react'
 import style from './index.less'
import bootstrap from '../../../static/bootstrap/css/bootstrap.css'
class NewTagStyle extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        return (
            <div className={style.font_color}>
              渡水复渡水
                <div className={`${bootstrap["btn-danger"]} ${bootstrap.btn}`}>按钮</div>
            </div>
        )
    }

}

export default NewTagStyle