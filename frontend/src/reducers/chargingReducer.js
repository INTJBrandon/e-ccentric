export default function chargingReducer(state, action) {
    switch (action.type) {
        case "FETCH_TRANSACTIONS":
            return {
                ...state, transactions: action.payload
            }
        case "CURRENT_TIME":
            return {
                ...state, datetime: new Date().toLocaleString()
            }
        case "INCREMENT_TOTAL":
            return {
                ...state, total: state.total + 0.0043333333333333
            }
        case "INCREMENT_LENGTH":
            return {
                ...state, length: state.length + 1
            }

        case "PAY_NOW":
            return {
                ...state, paid: true
            }
        case "PAY_LATER":
            return state
        case "SAVE_TRANSACTION":
            return {
                ...state,
                    transactions: [...state.transactions, action.payload]
            }
        case "PAY":
            return state
            
        default:
            return state
    }
}