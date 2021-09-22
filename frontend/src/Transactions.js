import React from 'react'
import {connect} from 'react-redux'
import fetchTransactions from './actions/fetchTransactions'
import { Container, Table } from 'react-bootstrap'
import Transaction from './transaction'

class Transactions extends React.Component {

    constructor(props) {
        super(props)
        this.state = {currentPage: 1, transPerPage: 2}

    }

    componentDidMount() {
        this.props.fetchTransactions()
    }

    currentTransactions() {
        const indexOfLastTransaction = this.state.currentPage * this.state.transPerPage
        const indexOfFirstTransaction = indexOfLastTransaction - this.state.transPerPage
        const currentTransactions = this.props.transactions.slice(indexOfFirstTransaction, indexOfLastTransaction)
        console.log(currentTransactions)
    }

    
    render() {
        
        return (
            <Container>
            <h1>Transaction History</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Total</th>
                        <th>Length</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.transactions && this.props.transactions.map(transaction => <Transaction info={transaction} key={transaction.id}/>
                    )}
                </tbody>
            </Table>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {fetchTransactions: fetchTransactions})(Transactions)