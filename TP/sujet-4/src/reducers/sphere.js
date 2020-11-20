import { ADD_SPHERE, SHUFFLE, UNSHUFFLE, RESET, START_ANIM, STOP_ANIM } from '../constants/actions'
import shuffle from 'shuffle-array'

//Source de vérité
const stateInit = {
    circles: []
}
const MAX = 50

const reducer = (state = stateInit, action = {}) => {

    switch(action.type) {
        case ADD_SPHERE:
            const circle = {
                color: `rgb(70,(${state.circles.length} * 255 / ${MAX}), 200)` 
           }

            if (state.circles.length <= (MAX-1)) {
                return {
                    ...state,
                    circles: state.circles.concat(circle)
                }
            }

            return {...state}

        case SHUFFLE:
            let shuffledState = shuffle(state.circles)
            return {
                ...state,
                circles: shuffledState
            }

        case UNSHUFFLE:
            let orderState = state.circles.sort((function(a,b){return a.id - b.id}))
            return {
                ...state,
                circles: orderState
            }

        case RESET:
            return {...state, circles: []}

        case START_ANIM:
            return state.circles.map((circle) => circle.id % 2 === 0 ? circle : { ...circle, animate: true })

        case STOP_ANIM:
            return state.circles.map((circle) => circle.id % 2 === 0 ? circle : { ...circle, animate: false })

        default:
            return state
    }
}

export default reducer