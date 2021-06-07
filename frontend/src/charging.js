import React from 'react'
import { connect } from 'react-redux'
import Pay from './pay'

class Charging extends React.Component {

    constructor(props) {
        super(props)
        this.state = {start: false, stop: true, status: "unfinished"}
    }

    updateTotal() {
        this.props.dispatch({ type: "INCREMENT_TOTAL"})
    }

    updateLength() {
        this.props.dispatch({ type: "INCREMENT_LENGTH"})
    }

    payNow() {
        this.props.dispatch({ type: "PAY_NOW"})
        // Submit state to database paying now
        this.setState({
            status: "completed"
        })
    }

    payLater() {
        this.props.dispatch({ type: "PAY_LATER"})
        this.setState({
            status: "completed"
        })
        // Submit state to database paying later
    }

    start() {
        
        this.totalID = setInterval(() => {
            this.updateTotal()
        }, 1000);

        this.lengthID = setInterval(() => {
            this.updateLength()
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
    }

    
    
    
    render() {
        
        return (
            <div>
                <button onClick={this.start.bind(this)} className={this.state.start ? 'start' : null}>Start Charging!</button>
                <button onClick={this.stop.bind(this)} className={this.state.stop ? 'stop' : null}>Stop Charging!</button>
                <li>Date: {this.props.datetime}</li>
                <li>Minutes charging: {this.props.length}</li>
                <li>Total: ${this.props.total.toFixed(2)}</li>
                <Pay status={this.state.status} callbackfn={this.payNow.bind(this)} callbackfn2={this.payLater.bind(this)}/>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps)(Charging)