import React from 'react'
import { connect } from 'react-redux'
import { loginActionCreator } from "../../redux-store/action-creators/loginActionCreator"
import {Register} from './Register'

class LoginWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            confirm:"",
            email:""
        }
    }

    onChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    onSubmit = () => {
        this.props.register(
            this.state.username,
            this.state.password,
            this.redirectOnSucces
        );
    }

    redirectOnSucces = () => {
        this.props.history.push("/login")
    }

    render() {
        return (
            <Register 
            onChange={this.onChange}
            onClick={this.onSubmit}
            />
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    register: (username, password, redirectOnSuccess) => dispatch(loginActionCreator(username, password, redirectOnSuccess))
})

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
export default connect(mapStateToProps, mapDispatchToProps)(LoginWrapper)