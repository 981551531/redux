import {HashRouter , Route, Switch,withRouter} from 'react-router-dom';
import Loadable from 'react-loadable';
import React from "react";

const setTitle = title => () => document.title = title;
const Loading = () => <div>Loading...</div>;
const App = Loadable({
    loader: () => import('../containers/App'),
    loading: Loading,
});
const Home = Loadable({
    loader: () => import('../containers/home/index'),
    loading: Loading,
});

const About = Loadable({
    loader: () => import('../containers/redux/index'),
    loading: Loading,

});

const Tobu = Loadable({
    loader: () => import('../containers/Tobu/index'),
    loading: Loading,

});

class RouteMap extends React.Component {

   

    render() {

        return (
            <HashRouter>
            <Switch>
                <App>
                    <Switch>
                        <Route exact path="/" component={Home}  />
                        <Route path="/re" component={About} />
                        <Route path="/Tobu" component={Tobu} />
                    </Switch>
                </App>
            </Switch>
        </HashRouter>)
    }

  
}


export default RouteMap