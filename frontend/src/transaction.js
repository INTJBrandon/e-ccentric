import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import pay from './actions/pay'
import fetchTransactions from './actions/fetchTransactions'

class Transaction extends React.Component {
    constructor(props) {
        super(props)
        this.payTransaction = this.payTransaction.bind(this)
        this.state = { status: this.props.info.paid}
    }
    componentDidUpdate() {
        if (!this.props.info.paid) {
            if (this.state.status) {
                this.props.fetchTransactions()
            }
        }
    }

    payTransaction() {
        this.setState({status: true}, () => this.props.pay(this.props.info))
    }



    render() {
        const paid = this.props.info.paid;
        return (
            <tr>
                <td>{this.props.info.id}</td>
                <td>${this.props.info.total}</td>
                <td>{this.props.info.length} Minute(s)</td>
                <td>{this.props.info.date}</td>
                {paid ? (
                    <td>Paid</td>
                ): (
                    <td><Button size="sm" onClick={this.payTransaction}>Pay Now!</Button></td>
                )}
            </tr>
        )
    }
}

export default connect(null, {pay: pay, fetchTransactions: fetchTransactions})(Transaction)

