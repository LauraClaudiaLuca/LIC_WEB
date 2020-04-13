import React from 'react'
import Paperbase from "./model/Paperbase";
import Content from './model/Content';
import { connect } from 'react-redux'
import { DatePickers } from './model/DatePickers';
import { statisticsActionCreator } from '../../redux-store/action-creators/statisticsActionCreator'
import { Typography } from '@material-ui/core';
import { NothingFoundContent } from './model/NothingFoundContent';

const statis = {
    positive: 20.5,
    negative: 20.5,
    neutral: 59,
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
            dateFrom: new Date(new Date().setHours(0, 0, 0)).valueOf(),
            dateTo: new Date(new Date().setHours(23, 59, 59)).valueOf()
        }
    }
    componentDidMount() {
        this.props.statistics(null, this.state.dateFrom, this.state.dateTo)
    }
    onChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }
    onChangeDate = (date, nr) => {
        if (nr == 1) {
            date = date.setHours(0, 0, 0, 0)
            this.setState({ dateFrom: new Date(date).setHours(0, 0, 0).valueOf() })
        }
        else {
            date = date.setHours(23, 59, 59, 0)
            this.setState({ dateTo: new Date(date).setHours(23, 59, 59).valueOf() })
        }
    }

    search = () => {
        this.props.statistics(this.state.productCode === "" ? null : this.state.productCode, this.state.dateFrom, this.state.dateTo)
    }

    render() {
        if (this.props.stats !== undefined) {
            return (
                <Paperbase child={
                    <Content
                        children={
                            <DatePickers dateFrom={this.state.dateFrom} dateTo={this.state.dateTo} onChangeDate={this.onChangeDate} />
                        }
                        onChange={this.onChange}
                        onClick={this.search}
                        statistics={this.props.stats}
                        productCode={this.state.productCode}
                    />
                } currentTab={"Custom"}>
                </Paperbase>
            )
        }
        else {
            return (
            <Paperbase child={
                <NothingFoundContent
                children={
                    <DatePickers dateFrom={this.state.dateFrom} dateTo={this.state.dateTo} onChangeDate={this.onChangeDate} />
                }
                onChange={this.onChange}
                onClick={this.search}
                productCode={this.state.productCode}
                />
            } currentTab={"Custom"}>
            </Paperbase>)
        }

    }
}
const mapStateToProps = state => ({
    stats: state.statisticsReducer.statistics
})

const mapDispatchToProps = dispatch => ({
    statistics: (productCode, dateFrom, dateTo) => dispatch(statisticsActionCreator(productCode, dateFrom, dateTo)),
})


export default connect(mapStateToProps, mapDispatchToProps)(SevenDaysWrapper);