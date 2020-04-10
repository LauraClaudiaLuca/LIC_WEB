import React from 'react'
import { connect } from 'react-redux'
import { registerActionCreator } from "../../redux-store/action-creators/loginActionCreator"
import {Register} from './Register'
import Swal from 'sweetalert2'

class RegisterWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            confirm:"",
            email:"",
            errorUsername:false,
            errorUsernameMessage:"",
            errorEmail:false,
            errorPassword:false,
            errorConfirmPassword:false,
        }
    }

    redirectOnSucces = async () => {
        await Swal.fire({
            icon: 'success',
            title: 'Registered!',
            text: 'You will be redirected to Login ...',
            confirmButtonColor: '#db3d44',
            confirmButtonText: 'OK'
        })
        this.props.history.push("/login")
    }

    actionOnFail = () =>{
        console.log("here")
        this.setState({
            error:true,
            errorMessage:"This username already exists. Please choose another."
        })
    }
    onChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    onSubmit = () => {
        this.setState({
            errorUsername: !this.state.username.match("^[a-zA-Z][a-zA-Z0-9_-]*$"),
            errorUsernameMessage: !this.state.username.match("^[a-zA-Z][a-zA-Z0-9_-]*$")?"The username should contain letters, numbers, _ and - only .":"",
            errorEmail: !this.state.email.match("^[a-zA-Z0-9\.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$"),
            errorPassword: this.state.password==="",
            errorConfirmPassword: this.state.confirm !== this.state.password
        },()=>{
            if(!this.state.errorUsername && !this.state.errorEmail && !this.state.errorPassword && !this.state.errorConfirmPassword){
                this.props.register(
                    this.state.username,
                    this.state.password,
                    this.state.email,
                    this.redirectOnSucces,
                    this.actionOnFail,
                );
            }
        })
    }



    render() {
        return (
            <Register 
            onChange={this.onChange}
            onClick={this.onSubmit}
            errorUsername={this.state.errorUsername}
            errorUsernameMessage={this.state.errorUsernameMessage}
            errorEmail ={this.state.errorEmail}
            errorPassword={this.state.errorPassword}
            errorConfirmPassword={this.state.errorConfirmPassword}
            />
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    register: (username, password,email, redirectOnSuccess, actionOnFail) => dispatch(registerActionCreator(username, password,email, redirectOnSuccess, actionOnFail))
})

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
export default connect(mapStateToProps, mapDispatchToProps)(RegisterWrapper)