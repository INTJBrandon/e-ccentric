import React from 'react'
import { connect } from 'react-redux'
import Pay from './pay'
import updateTotal from './actions/updateTotal'
import updateLength from './actions/updateLength'
import updateTime from './actions/updateTime'
import saveTransaction from './actions/saveTransaction'
import payLater from './actions/payLater'
import payNow from './actions/payNow'
import { Container, Button, Card } from 'react-bootstrap'


class Charging extends React.Component {

    constructor(props) {
        super(props)
        this.state = {start: false, stop: true, status: "unfinished"}
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.paid = this.paid.bind(this)
        this.unpaid = this.unpaid.bind(this)
    }

    componentWillUnmount() {

    }

    start() {
        
        this.totalID = setInterval(() => {
            this.props.updateTotal()
        }, 1000);

        this.timeID = setInterval(() => {
            this.props.updateTime()
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
        clearInterval(this.timeID)
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
            <Container className="charging-center">
                <Card className="text-center">
                <Card.Header>E-ccentric Charging Station</Card.Header>
                <Card.Body>
                    <Card.Title>Total Cost: ${this.props.total.toFixed(2)}</Card.Title>
                    <Card.Text>
                        Minutes Charging: {this.props.length}
                    </Card.Text>
                    <Button variant="success" onClick={this.start} className={this.state.start ? 'start' : null}>Start Charging</Button>
                    <Button variant="danger"onClick={this.stop} className={this.state.stop ? 'stop' : null}>Stop Charging!</Button>
                    <Pay status={this.state.status} callbackfn={this.paid} callbackfn2={this.unpaid}/>
                </Card.Body>
                <Card.Footer className="text-muted">{this.props.datetime}</Card.Footer>
                </Card>
            </Container> 
            </>
        )
    }
}




function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {saveTransaction: saveTransaction, updateTotal: updateTotal, updateLength: updateLength, payNow: payNow, payLater: payLater, updateTime: updateTime})(Charging)