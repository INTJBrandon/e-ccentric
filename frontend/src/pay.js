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
    return null
}

export default Pay