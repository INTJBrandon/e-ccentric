export default function saveTransaction(props) {
    const body = {
        history: {
            total: props.total,
            length: props.length,
            date: props.date,
            paid: props.paid
        }
    }
    return function(dispatch) {
        
        fetch("http://127.0.0.1:3000/histories", {
            method: "POST",
            headers: {Accept: "application/json", "Content-type": "application/json"},
            body: JSON.stringify(body)
        }).then(resp => resp.json())
        .then(transaction => dispatch({type: "SAVE_TRANSACTION", payload: transaction}))
        

    }
}