import React from 'react'
import Paperbase from "./model/Paperbase";
import Content from './model/Content';

class ChangePassWrapper extends React.Component {
    render(){
        return(
            <Paperbase child={<Content/>} currentTab={"Change password"}>
            </Paperbase>
        )
    }
}
export default ChangePassWrapper;