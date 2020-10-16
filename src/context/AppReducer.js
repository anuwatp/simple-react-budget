export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
        return {
            ...state, // Send back current state
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload) // Filtering deleted ids
        }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions] // Add new transactions and old ones
            }
        default:
            return state;
    }
};