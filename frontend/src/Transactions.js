import React from 'react'
import {connect} from 'react-redux'
import fetchTransactions from './actions/fetchTransactions'
import { Container, Table } from 'react-bootstrap'
import Transaction from './transaction'

class Transactions extends React.Component {

    constructor(props) {
        super(props)
        this.state = {currentPage: 1, transPerPage: 10, paginationTransactions: [], status: false}
        this.currentTransactions = this.currentTransactions.bind(this)

    }

    componentDidMount() {
        this.props.fetchTransactions()
    }

    componentDidUpdate() {
        if (!this.state.status) {
            this.setState({status: true})
        }
        if (this.state.paginationTransactions.length <= 0 && this.props.transactions.length > 0) {
            this.currentTransactions()
        }
    }


    currentTransactions() {
        const indexOfLastTransaction = this.state.currentPage * this.state.transPerPage
        const indexOfFirstTransaction = indexOfLastTransaction - this.state.transPerPage
        const paginationTransactions = this.props.transactions.slice(indexOfFirstTransaction, indexOfLastTransaction)
        this.setState({paginationTransactions: paginationTransactions})
    }

    updatePage() {

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
                {this.state.paginationTransactions && this.state.paginationTransactions.map(transaction => <Transaction info={transaction} key={transaction.id}/>
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