import { Button } from "react-bootstrap"

function Pay(props) {
    if (props.status === 'finished') {
        return (
            <div>
                <h3>Would You Like To Pay Now?</h3>
                <Button className="pay-button" variant="success" onClick={props.callbackfn}>Yes</Button>
                <Button className="pay-button" variant ="danger"onClick={props.callbackfn2}>No</Button>
            </div>
        )
    }
    else if (props.status === 'completed') {
        return (
            <h2>Thank you for using E-ccentric!</h2>
        )
        
    }
    return null
}

export default Pay