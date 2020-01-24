import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import ProjectFour from './components/projects/ProjectFour'
import ProjectThree from './components/projects/ProjectThree'
import ProjectTwo from './components/projects/ProjectTwo'
import ProjectOne from './components/projects/ProjectOne'
import ProjectUXCollab from './components/projects/ProjectUXCollab'
import {BrowserRouter as Router} from 'react-router-dom';

export const Routes = (props) => {
    return (
        <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/projects/p4' component={ProjectFour} />
            <Route exact path='/projects/p3' component={ProjectThree} />
            <Route exact path='/projects/p2' component={ProjectTwo} />
            <Route exact path='/projects/p1' component={ProjectOne} />
            <Route exact path='/projects/uxcollab' component={ProjectUXCollab} />
        </Switch>
        </Router>
    )
}