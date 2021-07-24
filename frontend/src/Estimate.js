import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

class Estimate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {value: '', estimated: false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const estimate = this.state.value * 0.26
        this.setState({estimated: estimate.toFixed(2)})
        this.setState({value: ''})

    }


    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <Row class="align-items-center">
                        <Col sm={3} className="my-1">
                            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                Price Estimate
                            </Form.Label>
                            <Form.Control type="number" id="inlineFormInputName" placeholder="Price Estimate: Minutes" value={this.state.value} onChange={this.handleChange} />
                        </Col>
                        <Col xs="auto" className="my-1">
                        <Button variant="success" type="submit" className="mb-2">Estimate!</Button>
                        </Col>
                    </Row>
                </form>
                {this.state.estimated && <h1>Estimated Price: ${this.state.estimated}</h1>}
            </>
        )
    }
}

export default Estimate