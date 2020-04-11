import React from 'react'
import Paperbase from "./model/Paperbase";
import Content from './model/Content';
import {Profile} from './model/Profile'

class ProfileWrapper extends React.Component {
    render(){
        return(
            <Paperbase child={
            <Profile
                username={"test-tenant"}
                email={"test"}
                numberOfStoredFeedback={1234567891011121314}
                token={localStorage.getItem("token")}
            />
            } currentTab={"Profile"}>
            </Paperbase>
        )
    }
}
export default ProfileWrapper;