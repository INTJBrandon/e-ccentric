export default function pay(props) {
    const body = {
        transaction: {
            id: props.id,
            total: props.total,
            length: props.length,
            date: props.datetime,
            paid: true
        }
    }
    return function(dispatch) {
        fetch(`http://127.0.0.1:3000/transactions/${props.id}`, {
            method: "PATCH",
            headers: {Accept: "application/json", "Content-type": "application/json"},
            body: JSON.stringify(body)
        }).then(resp => resp.json())
        .then(transaction => dispatch({type: "PAY", payload: transaction}))
        

    }
}