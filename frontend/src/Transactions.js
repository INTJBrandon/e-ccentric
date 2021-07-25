import React from 'react'
import {connect} from 'react-redux'
import fetchTransactions from './actions/fetchTransactions'
import { Container, Table } from 'react-bootstrap'

class Transactions extends React.Component {
    componentDidMount() {
        this.props.fetchTransactions()
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
                        <th>Paid</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.transactions && this.props.transactions.map(transaction => 
                    <tr key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>${transaction.total}</td>
                        <td>{transaction.length} Minute(s)</td>
                        <td>{transaction.paid.toString()}</td>
                        <td>{transaction.date}</td>
                    </tr>)}
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