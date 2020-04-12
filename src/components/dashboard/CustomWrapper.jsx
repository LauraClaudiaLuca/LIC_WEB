import React from 'react'
import Paperbase from "./model/Paperbase";
import Content from './model/Content';
import { connect } from 'react-redux'
import { DatePickers } from './model/DatePickers';
import {statisticsActionCreator} from '../../redux-store/action-creators/statisticsActionCreator'

const statis = {
    positive:20.5,
    negative:20.5,
    neutral:59,
    mostPositive: {
        title: "Best headphones",
        content: "blablablabla",
        createdAt: "Oct21",
        likes: 123
    },
    mostNegative: {
        title: "Worst headphones",
        createdAt: "Oct22",
        content: "blablablabla",
        likes: 1234
    },
    mostLiked: {
        title: "Ok headphones",
        createdAt: "Oct23",
        content: "blablablabla",
        likes: 1234567
    }
}
class SevenDaysWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productCode: "",
            dateFrom: Date().setHours(0,0,0,0),
            dateTo: Date().setHours(23,59,59,0)
        }
    }
    componentDidMount() {
        this.props.statistics(undefined, this.state.dateFrom, this.state.dateTo)
    }
    onChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }
    onChangeDate = (date,nr)=>{
        if(nr==1){
            date = date.setHours(0,0,0,0)
            this.setState({ dateFrom:date})
        }
        else{
            date =date.setHours(23,59,59,0)
            this.setState({dateTo:date})
        }
    }

    search = () => {
        console.log(this.state.productCode, this.state.dateFrom, this.state.dateTo)
    }

    render() {
        return (
            <Paperbase child={
                <Content
                    children={
                        <DatePickers dateFrom={this.state.dateFrom} dateTo={this.state.dateTo} onChangeDate={this.onChangeDate}/>
                    }
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