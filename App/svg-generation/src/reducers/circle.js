const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            console.log(state)
            return {
                ...state, id: state.lenght
            }

        case 'shuffle':

            return {

            }

        default:
            return state
    }
}

export default reducer