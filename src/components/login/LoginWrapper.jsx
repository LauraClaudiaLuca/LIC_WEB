import React from 'react'
import { connect } from 'react-redux'
import { loginActionCreator, logoutUser } from "../../redux-store/action-creators/loginActionCreator"
import {Login} from './Login'

class LoginWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    componentDidMount = ()=>{
        logoutUser();
    }
    onChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    onSubmit = () => {
        this.props.login(
            this.state.username,
            this.state.password,
            this.redirectOnSucces
        );
    }

    redirectOnSucces = () => {
        this.props.history.push("/")
    }

    render() {
        return (
            <Login 
            onChange={this.onChange}
            onClick={this.onSubmit}
            />
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    login: (username, password, redirectOnSuccess) => dispatch(loginActionCreator(username, password, redirectOnSuccess)),
    logout:()=>dispatch(logoutUser()),
})

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
export default connect(mapStateToProps, mapDispatchToProps)(LoginWrapper)