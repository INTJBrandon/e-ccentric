import React from 'react'
import { Form, Row, Col, Button, Container, Alert} from 'react-bootstrap'

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
                <Container className="center"> 
                    <form onSubmit={this.handleSubmit}>
                            <Row className="align-items-center">
                                <Col sm={6} className="my-1">
                                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                        name
                                    </Form.Label>
                                    <Form.Control type="number" id="inlineFormInputName" placeholder="Price Estimate: Minutes" value={this.state.value} onChange={this.handleChange} />
                                </Col>
                                <Col xs={4} className="my-1">
                                <Button variant="success" type="submit" className="my-3">Estimate!</Button>
                                </Col>
                            </Row>
                        </form>
                        <Row className="align-items-center">
                            <Col sm={5} className="my-1">
                                {this.state.estimated && <Alert variant="success">Estimated Price: ${this.state.estimated}</Alert>}
                            </Col>
                        </Row>
                        
                </Container>
            </>
        )
    }
}

export default Estimate