import React, { Component } from 'react'
import './App.css';
import BookContainer from './containers/BookContainer'
import NavBar from './components/NavBar'
import Login from './containers/Login'
import Favorites from './containers/Favorites'
import Header from './components/Header'



import {BrowserRouter as Router, Route} from 'react-router-dom'


export class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             user_id: 2,
             name: "Kelliann"
        }
    }
    
    render() {
        return (
            <div className="App">
                <Router>
                <NavBar/>
                    <Route exact path="/" component={Header}/>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/favorites" render={(props) => <Favorites {...props} user_id={this.state.user_id}/>}/>
                    <Route exact path="/" render={(props) => <BookContainer  {...props} user_id={this.state.user_id}/>}/>
                </Router>
            </div>
        )
    }
}

export default App

