function Pay(props) {
    if (props.status === 'finished') {
        return (
            <div>
                <h3>Would You Like To Pay Now?</h3>
                <button onClick={props.callbackfn}>Yes</button>
                <button onClick={props.callbackfn2}>No</button>
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