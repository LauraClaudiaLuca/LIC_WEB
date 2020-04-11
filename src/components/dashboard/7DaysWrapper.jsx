import React from 'react'
import Paperbase from "./model/Paperbase";
import Content from './model/Content';

class SevenDaysWrapper extends React.Component {
    render(){
        return(
            <Paperbase child={<Content />} currentTab={"7 days ago"}>
            </Paperbase>
        )
    }
}
export default SevenDaysWrapper;