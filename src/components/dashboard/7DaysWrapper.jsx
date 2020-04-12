import React from 'react'
import Paperbase from "./model/Paperbase";
import Content from './model/Content';
import { connect } from 'react-redux'
import {statisticsActionCreator} from '../../redux-store/action-creators/statisticsActionCreator'

const statis = {
    positive:20.5,
    negative:20.5,
    neutral:59,
    mostPositive:{
        title:"Best headphones",
        content:"blablablabla",
        createdAt:"Oct21",
        likes:123
    },
    mostNegative:{
        title:"Worst headphones",
        createdAt:"Oct22",
        content:"blablablabla",
        likes:1234
    },
    mostLiked:{
        title:"Ok headphones",
        createdAt:"Oct23",
        content:"blablablabla",
        likes:1234567
    }
}
class SevenDaysWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productCode: "",
        }
    }
    componentDidMount(){
        const sevendaysago = new Date(new Date().getDate()-7)
        const now = new Date();
        this.props.statistics(undefined,sevendaysago,now)
    }
    onChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    search = () => {
        alert(this.state.productCode)
    }

    render() {
        return (
            <Paperbase child={
                <Content
                    onChange={this.onChange}
                    onClick={this.search}
                    statistics={statis}
                    productCode={this.state.productCode}
                />
            } currentTab={"1 year ago"}>
            </Paperbase>
        )
    }
}
const mapStateToProps = state => ({
    stats:state.statisticsReducer.statistics
})

const mapDispatchToProps = dispatch => ({
    statistics: (productCode, dateFrom, dateTo) => dispatch(statisticsActionCreator(productCode,dateFrom,dateTo)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SevenDaysWrapper);