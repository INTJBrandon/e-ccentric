import React from 'react'
import { connect } from 'react-redux'

class Charging extends React.Component {

    constructor(props) {
        super(props)
        this.state = {start: false, stop: true}
    }

    updateTotal() {
        this.props.dispatch({ type: "INCREMENT_TOTAL"})
    }

    updateLength() {
        this.props.dispatch({ type: "INCREMENT_LENGTH"})
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
        clearInterval(this.totalID, this.lengthID)
        this.setState({
            stop: !this.state.stop
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
            </div>
        )
    }
}



function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps)(Charging)