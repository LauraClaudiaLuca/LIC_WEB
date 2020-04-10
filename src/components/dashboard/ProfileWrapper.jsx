import React from 'react'
import Paperbase from "./model/Paperbase";
import Content from './model/Content';

class ProfileWrapper extends React.Component {
    render(){
        return(
            <Paperbase child={<Content/>} currentTab={"Profile"}>
            </Paperbase>
        )
    }
}
export default ProfileWrapper;