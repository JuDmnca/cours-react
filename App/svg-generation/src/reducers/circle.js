import shuffle from 'shuffle-array'
const MAX = 12

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            if (state.length <= (MAX-1)) {
                return [...state, { id: state.length }]
            }

            return [...state]

        case 'shuffle':
            let shuffledState = shuffle(state)
            return [...shuffledState ]

        case 'unshuffle':
            let orderState = state.sort((function(a,b){return a.id - b.id}))
            return [...orderState ]

        case 'reset':
            return [...[]]

        case 'start_anim':
            return state.map((circle) => circle.id % 2 === 0 ? circle : { ...circle, animate: true })

        case 'stop_anim':
            return state.map((circle) => circle.id % 2 === 0 ? circle : { ...circle, animate: false })

        default:
            return state
    }
}

export default reducer