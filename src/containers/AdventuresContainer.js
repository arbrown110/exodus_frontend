import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from "react-router-dom"

import {fetchAdventures} from '../actions/AdventuresActions'
import AdventureForm from '../components/adventures/AdventureForm'
import Adventures from '../components/adventures/Adventures'
import Adventure from '../components/adventures/Adventure'
import About from '../components/stateless/About'
import Home from  '../components/stateless/Home'

class AdventuresContainer extends Component {
    componentDidMount(){
        this.props.fetchAdventures()
    }

    render() {
        return(
            <div>
                <Switch>
                    <Route path='/' component={Home} />
                    <Route path='/avdentures/new' component={AdventureForm}/>
                    <Route path='adventures/:id' render={(routerProps) => <Adventure {...routerProps} adventures={this.props.adventures} /> } />
                    <Route path='adventures' render={(routerProps) => <Adventures {...routerProps} adventures={this.props.adventures} /> } />
                    <Route path='/About' component={About} />
                </Switch>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        adventures: state.adventures
    };
};

export default connect(mapStateToProps, { fetchAdventures })(AdventuresContainer);