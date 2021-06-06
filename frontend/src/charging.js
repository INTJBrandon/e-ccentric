import React from 'react'
import { connect } from 'react-redux'

class Charging extends React.Component {

    constructor(props) {
        super(props)
        this.state = {active: true}
    }

    updateTotal() {
        this.props.dispatch({ type: "INCREMENT_TOTAL"})
    }

    updateLength() {
        this.props.dispatch({ type: "INCREMENT_LENGTH"})
    }

    start() {
        
        setInterval(() => {
            this.updateTotal()
        }, 1000);

        setInterval(() => {
            this.updateLength()
        }, 60000);

        this.toggleButton()
    }

    toggleButton() {
        console.log("Toggled!")
    }

    stop() {
        console.log("Stopped")
    }

    
    
    
    render() {
        
        return (
            <div>
                <button onClick={this.start.bind(this)}>Start Charging!</button>
                <button onClick={this.stop.bind(this)}>Stop Charging!</button>
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