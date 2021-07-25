import React from 'react'
import { connect } from 'react-redux'
import Pay from './pay'
import updateTotal from './actions/updateTotal'
import updateLength from './actions/updateLength'
import saveTransaction from './actions/saveTransaction'
import payLater from './actions/payLater'
import payNow from './actions/payNow'
import { Container } from 'react-bootstrap'


class Charging extends React.Component {

    constructor(props) {
        super(props)
        this.state = {start: false, stop: true, status: "unfinished"}
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.paid = this.paid.bind(this)
        this.unpaid = this.unpaid.bind(this)
    }

    start() {
        
        this.totalID = setInterval(() => {
            this.props.updateTotal()
        }, 1000);

        this.lengthID = setInterval(() => {
            this.props.updateLength()
        }, 60000);

        this.toggleButton()
    }

    toggleButton() {
        this.setState({
            start: !this.state.start,
            stop: !this.state.stop
        })
    }

    stop() {
        clearInterval(this.totalID)
        clearInterval(this.lengthID)
        this.setState({
            stop: !this.state.stop,
            status: "finished"
        })
        console.log("Stopped")
        debugger
    }

    paid() {
        this.props.payNow()
        this.setState({status: "completed"}, () => this.props.saveTransaction(this.props))
    }

    unpaid() {
        this.props.payLater()
        this.setState({status: "completed"}, () => this.props.saveTransaction(this.props))
    }

    
    
    
    render() {
        return (
            <>
            <Container>
                <button onClick={this.start} className={this.state.start ? 'start' : null}>Start Charging!</button>
                <button onClick={this.stop} className={this.state.stop ? 'stop' : null}>Stop Charging!</button>
                <li>Date: {this.props.datetime}</li>
                <li>Minutes charging: {this.props.length}</li>
                <li>Total: ${this.props.total.toFixed(2)}</li>
                <Pay status={this.state.status} callbackfn={this.paid} callbackfn2={this.unpaid}/>
            </Container> 
            </>
        )
    }
}




function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, {saveTransaction: saveTransaction, updateTotal: updateTotal, updateLength: updateLength, payNow: payNow, payLater: payLater})(Charging)