export default function saveTransaction(props) {
    const body = {
        transaction: {
            total: props.total.toFixed(2),
            length: props.length,
            date: props.datetime,
            paid: props.paid
        }
    }
    return function(dispatch) {
        
        fetch("http://127.0.0.1:3000/transactions", {
            method: "POST",
            headers: {Accept: "application/json", "Content-type": "application/json"},
            body: JSON.stringify(body)
        }).then(resp => resp.json())
        .then(transaction => dispatch({type: "SAVE_TRANSACTION", payload: transaction}))
        

    }
}