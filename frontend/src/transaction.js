import React from 'react'
import { Button } from 'react-bootstrap'

export default class Transaction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {upvote: 0}
        this.upvote = this.upvote.bind(this)
    }

    upvote() {
        const value = this.state.upvote
        this.setState({upvote: value + 1})
    }

    updateStatus() {
        
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
                    <td><Button onClick={this.updateStatus}>Pay Now!</Button></td>
                )}
                    
            </tr>
        )
    }
}

