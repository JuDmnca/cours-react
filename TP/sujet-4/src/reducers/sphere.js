import { ADD_SPHERE, SHUFFLE, UNSHUFFLE, RESET, START_ANIM, STOP_ANIM, EASTER_EGG } from '../constants/actions'
import shuffle from 'shuffle-array'

//Source de vérité
const stateInit = {
    spheres: []
}
const MAX = 40

const reducer = (state = stateInit, action = {}) => {

    switch(action.type) {
        case ADD_SPHERE:
            const g = Math.floor(state.spheres.length * 255 / MAX)
            const sphere = {
                color: `rgb(70,${g}, 200)`,
                number: state.spheres.length.toString(),
                animate: false,
                easterEgg: false
           }

            if (state.spheres.length <= (MAX-1)) {
                return {
                    ...state,
                    spheres: state.spheres.concat(sphere)
                }
            }

            return {...state}

        case SHUFFLE:
            let shuffledState = shuffle(state.spheres)
            return {
                ...state,
                spheres: shuffledState
            }

        case UNSHUFFLE:
            let orderState = state.spheres.sort((function(a,b){return a.number - b.number}))
            return {
                ...state,
                spheres: orderState
            }

        case RESET:
            return {...state, spheres: []}

        case START_ANIM:
            return {
                ...state,
                spheres: state.spheres.map((sphere) => sphere.number % 2 === 0 ? sphere : { ...sphere, animate: true })
            }

        case STOP_ANIM:
            return {
                ...state,
                spheres: state.spheres.map((sphere) => sphere.number % 2 === 0 ? sphere : { ...sphere, animate: false })
            }

        case EASTER_EGG:
            let spheres = [...state.spheres]
            spheres[spheres.length - 1] = { ...spheres[spheres.length - 1], easterEgg: true }

            return {
                ...state,
                spheres: spheres
            }

        default:
            return state
    }
}

export default reducer