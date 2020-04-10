import React from 'react'
import Paperbase from "./model/Paperbase";
import Content from './model/Content';

class ThirtyDaysWrapper extends React.Component {
    render(){
        return(
            <Paperbase child={<Content/>} currentTab={"30 days ago"}>
            </Paperbase>
        )
    }
}
export default ThirtyDaysWrapper;