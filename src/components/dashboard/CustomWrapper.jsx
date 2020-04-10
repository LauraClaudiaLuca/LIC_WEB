import React from 'react'
import Paperbase from "./model/Paperbase";
import Content from './model/Content';

class CustomWrapper extends React.Component {
    render(){
        return(
            <Paperbase child={<Content/>} currentTab={"Custom"}>
            </Paperbase>
        )
    }
}
export default CustomWrapper;