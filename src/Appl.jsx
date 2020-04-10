import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Paperbase from './components/dashboard/model/Paperbase'
import PageNotFound from './components/not-found/PageNotFound'
import LoginWrapper from './components/login/LoginWrapper'
import RegisterWrapper from './components/register/RegisterWrapper'
import SevenDaysWrapper from './components/dashboard/7DaysWrapper';
import ThirtyDaysWrapper from './components/dashboard/30DaysWrapper';
import OneYearWrapper from './components/dashboard/1YearAgoWrapper';
import CustomWrapper from './components/dashboard/CustomWrapper';
import TokenWrapper from './components/dashboard/TokenWrapper';
import ChangePassWrapper from './components/dashboard/ChangePassWrapper';
import ProfileWrapper from './components/dashboard/ProfileWrapper';

class Appl extends Component {

  // UNSAFE_componentWillMount() {
  //   let token = localStorage.getItem("token")
  //   if (token) {
  //     this.props.markAsLoggedIn(token.firstName)
  //   }
  // }

  // componentDidUpdate() {
  //   let token = localStorage.getItem("token")
  //   if (this.props.isLoggedIn && token !== JSON.stringify(this.props.user)) {
  //     this.props.getUserData(JSON.parse(token))
  //   }
  // }


  loggedInRoutes() {
    let { user } = this.props
    let {isLoggedIn} = user!==null
    return (
      <Switch>
        <Route exact path='/' component={SevenDaysWrapper} />
        <Route exact path='/30days' component={ThirtyDaysWrapper} />
        <Route exact path='/1year' component={OneYearWrapper} />
        <Route exact path='/custom' component={CustomWrapper} />
        <Route exact path='/login' component={LoginWrapper} />
        <Route exact path='/register' component={RegisterWrapper} />
        <Route exact path='/token' component={TokenWrapper} />
        <Route exact path='/changepassword' component={ChangePassWrapper} />
        <Route exact path='/profile' component={ProfileWrapper} />
        <Route exact path='/logout' component={LoginWrapper} />
        {/* <PrivateRoute path='/calendar' component={Calendar} authorized={isLoggedIn} redir="/login" />
        <PrivateRoute path='/news' component={News} authorized={isLoggedIn} redir="/login" />
        <PrivateRoute path='/profile' component={Profile} authorized={isLoggedIn} redir="/login" />
        <PrivateRoute path='/proposals' component={Proposals} authorized={isLoggedIn} redir="/login" />
        <PrivateRoute path='/admin' component={AdminDashboard} authorized={isLoggedIn && user.isAdmin} redir="/login" /> */}
        <Route component={PageNotFound} />
      </Switch>

    )
  }

  loggedOutRoutes() {
    return (
      <Switch>
        <Route exact path='/login' component={LoginWrapper} />
        {/* <Route component={PageNotFound} /> */}
      </Switch>

    )
  }

  render() {
    let routes = this.props.user!==null ? this.loggedInRoutes() : this.loggedOutRoutes()

    return (
      <BrowserRouter>
        {routes}
      </BrowserRouter>

    )
  }
}

const mapStateToProps = state => ({
  user: state.loginReducer.user
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Appl)
