import React from 'react'
import Paperbase from "./model/Paperbase";
import Content from './model/Content';

class TokenWrapper extends React.Component {
    render(){
        return(
            <Paperbase child={<Content/>} currentTab={"Token"}>
            </Paperbase>
        )
    }
}
export default TokenWrapper;