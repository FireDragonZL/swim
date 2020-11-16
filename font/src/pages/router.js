import React,{Component} from 'react'
import { HashRouter,Route,Switch } from 'react-router-dom'
import App from '../app'
import Home from './home'
import DataSource from './datasource'
import MetaData from './metadata'
import NoMatch from './nomatch'

class Router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/metaData" component={MetaData} />
                        <Route path="/dataSource" component={DataSource} />
                        <Route path="*" component={NoMatch} />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}

export default Router
