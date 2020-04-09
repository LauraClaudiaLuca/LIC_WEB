import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import DashBoard from './components/dashboard/Dashboard'
import PageNotFound from './components/not-found/PageNotFound'
import LoginWrapper from './components/login/LoginWrapper'
import RegisterWrapper from './components/register/RegisterWrapper'

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
        <Route exact path='/' component={DashBoard} />
        <Route exact path='/login' component={LoginWrapper} />
        <Route exact path='/register' component={RegisterWrapper} />
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
