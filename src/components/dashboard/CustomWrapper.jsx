import React from 'react'
import Paperbase from "./model/Paperbase";
import Content from './model/Content';
import {DatePickers} from "./model/DatePickers"


class CustomWrapper extends React.Component {
    render(){
        return(
            <Paperbase child={<Content children={
            <DatePickers/>
            }/>} currentTab={"Custom"}>
            </Paperbase>
        )
    }
}
export default CustomWrapper;