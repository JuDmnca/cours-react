import shuffle from 'shuffle-array'

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return  [...state, { id: state.length }]

        case 'shuffle':
            return shuffle(state)

        default:
            return state
    }
}

export default reducer