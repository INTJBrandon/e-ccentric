import React from 'react'

class Estimate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }


    render() {
        return (
            <>
                <form>
                    <label>
                        Price Estimate: 
                        <input type="number" name="estimate"></input>
                    </label>
                    <input type="submit" value="Estimate"></input>
                </form>
            </>
        )
    }
}

export default Estimate