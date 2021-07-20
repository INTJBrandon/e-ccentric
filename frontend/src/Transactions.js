import React from 'react'
import {connect} from 'react-redux'
import fetchTransactions from './actions/fetchTransactions'

class Transactions extends React.Component {
    componentDidMount() {
        this.props.fetchTransactions()
    }

    
    render() {
        
        return (
            // <div>
            //     {this.props.transactions && this.props.transactions.map(transaction => <li>Id: {transaction.id} - Total: {transaction.total} - Length: {transaction.length} Minutes Charging - Status: {transaction.paid.toString()} - Date: {transaction.created_at} </li>)}
            // </div>
            <div>
                {this.props.transactions && this.props.transactions.map(transaction => <li key={transaction.id}>Total: {transaction.total} - Length: {transaction.length} Minutes Charging - Status: {transaction.paid.toString()} - Date: {transaction.created_at} </li>)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {fetchTransactions: fetchTransactions})(Transactions)
