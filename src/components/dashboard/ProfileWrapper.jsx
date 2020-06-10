import React from 'react'
import Paperbase from "./model/Paperbase";
import {Profile} from './model/Profile'
import { connect } from 'react-redux'
import { getUserActionCreator, updateEmailActionCreator,updatePasswordActionCreator } from '../../redux-store/action-creators/loginActionCreator';
import jwt from 'jwt-decode'
import Swal from 'sweetalert2'



class ProfileWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
            email:"",
        }
    }
    componentDidMount() {
        const username = jwt(localStorage.getItem("token")).username
        this.props.getUser(username)
    }
    onChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    redirectOnSucces = async () => {
        await Swal.fire({
            icon: 'success',
            title: 'Profile updated!',
            text: 'You will be redirected to Login ...',
            confirmButtonColor: '#db3d44',
            confirmButtonText: 'OK'
        })
        this.props.history.push("/login")
    }
    saveEmail =()=>{
        const username = jwt(localStorage.getItem("token")).username
        this.props.updateEmail(username,this.state.email,this.redirectOnSucces)
    }

    savePassword = ()=>{
        const username = jwt(localStorage.getItem("token")).username
        this.props.updatePassword(username,this.state.password,this.redirectOnSucces)

    }
    render(){
        console.log(this.props.user)
        return(
            <Paperbase child={
            <Profile
                username={this.props.user.username}
                email={this.props.user.email}
                token={localStorage.getItem("token")}
                onChange={this.onChange}
                saveEmail={this.saveEmail}
                savePassword={this.savePassword}
            />
            } currentTab={"Profile"}>
                
            </Paperbase>
        )
    }
}
const mapStateToProps = state => ({
    user: state.loginReducer.user
  })
  
  const mapDispatchToProps = dispatch => ({
    getUser: (username) => dispatch(getUserActionCreator(username)),
    updateEmail:(username,email,redirectOnSuccess) => dispatch(updateEmailActionCreator(username,email,redirectOnSuccess)),
    updatePassword:(username,password,redirectOnSuccess) => dispatch(updatePasswordActionCreator(username,password,redirectOnSuccess)),
  })
  
 export default connect(mapStateToProps, mapDispatchToProps)(ProfileWrapper)