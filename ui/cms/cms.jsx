require('./cms.css');

import ItemEditorContainer from './components/item-editor-container'
import SideMenu from './components/side-menu'
import rootReducer from './reducer'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { } from './actions'

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
    ,createLogger() 
  ))

class App extends React.Component {
    render() {
        return (<div className="app-main">{this.props.children}</div>)
    }
}

class StartScreen extends React.Component {
    render() {
    return (
      <div className="container">        
        <div className="jumbotron">
          <h1>hCMS</h1>
          <h3>Welcome to hCMS!</h3>
          <p>hCMS will be a headless, api driven, content first cms to fit in a micro service environment.</p>
        </div>        
      </div>)
    }
}

ReactDOM.render(
  <Provider store={store}>
  <App>
    <SideMenu>
      <h3>TODO: Collections Menu</h3>
      <ul>
        <li><a href="#/item/item1">Item 1</a></li>
        <li><a href="#/item/item2">Item 2</a></li>
      </ul>  
    </SideMenu>
    <div className="content-area">
      <Router history={hashHistory}>
        <Route path="/" component={StartScreen}/>
        <Route path="/item/:id" component={ItemEditorContainer}/>
      </Router>
    </div>
  </App>
  </Provider>,
  document.getElementById('root')
);      

//store.dispatch(loadCategories())
