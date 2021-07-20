export default function fetchTransactions() {
    return (dispatch) => {
        fetch("http://127.0.0.1:3000/transactions")
        .then(resp => resp.json())
        .then((transactionsArray) => {
            dispatch({type: "FETCH_TRANSACTIONS", payload: transactionsArray})
        })
    }
}