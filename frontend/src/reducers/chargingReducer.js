export default function chargingReducer(state, action) {
    switch (action.type) {
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
        default:
            return state
    }
}