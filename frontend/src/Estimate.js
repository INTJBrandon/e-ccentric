import React from 'react'

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
                    <label>
                        Price Estimate: 
                        <input type="number" value={this.state.value} onChange={this.handleChange}></input>
                    </label>
                    <input type="submit" value="Estimate"></input>
                </form>
                {this.state.estimated && <h1>Estimated Price: ${this.state.estimated}</h1>}
            </>
        )
    }
}

export default Estimate