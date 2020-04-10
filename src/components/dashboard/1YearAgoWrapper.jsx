import React from 'react'
import Paperbase from "./model/Paperbase";
import Content from './model/Content';

class OneYearWrapper extends React.Component {
    render(){
        return(
            <Paperbase child={<Content/>} currentTab={"1 year ago"}>
            </Paperbase>
        )
    }
}
export default OneYearWrapper;