import React from 'react'
import Paperbase from "./model/Paperbase";
import Content from './model/Content';
import { connect } from 'react-redux'
import {statisticsActionCreator} from '../../redux-store/action-creators/statisticsActionCreator'
import NothingFoundContent from './model/NothingFoundContent';

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
class OneYearWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productCode: "",
            stats:props.stats,
            dateFrom: new Date(new Date().setFullYear(new Date().getFullYear() - 1)).valueOf(),
            dateTo:new Date().valueOf(),
        }
    }

    componentDidMount(){
        this.props.statistics(null,this.state.dateFrom,this.state.dateTo)
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

    componentDidUpdate(prevProps) {
        const { stats: prevStats } = prevProps;
        const { stats: nextStats } = this.props;
        if (prevStats !== nextStats){
            this.setState({
                stats:nextStats
            })
        }

    }
    render() {
        if(this.state.stats!==undefined){
            return (
                <Paperbase child={
                    <Content
                        onChange={this.onChange}
                        onClick={this.search}
                        statistics={this.state.stats}
                        productCode={this.state.productCode}
                    />
                } currentTab={"1 year ago"}>
                </Paperbase>
            )
        }
        else {
            return (
            <Paperbase child={
                <NothingFoundContent
                onChange={this.onChange}
                onClick={this.search}
                productCode={this.state.productCode}
                />
            } currentTab={"1 year ago"}>
            </Paperbase>)
        }

    }
}
const mapStateToProps = state => ({
    stats:state.statisticsReducer.statistics
})

const mapDispatchToProps = dispatch => ({
    statistics: (productCode, dateFrom, dateTo) => dispatch(statisticsActionCreator(productCode,dateFrom,dateTo)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OneYearWrapper);