export default function updateStatus(props) {
    const body = {
        transaction: {
            id: props.info.id,
            total: props.info.total.toFixed(2),
            length: props.info.length,
            date: props.info.datetime,
            paid: props.info.paid
        }
    }
    return function(dispatch) {
        fetch("http://127.0.0.1:3000/transactions", {
            method: "PATCH",
            headers: {Accept: "application/json", "Content-type": "application/json"},
            body: JSON.stringify(body)
        }).then(resp => resp.json())
        .then(transaction => dispatch({type: "PAY", payload: transaction}))
        

    }
}