import { ADD_SPHERE, SHUFFLE, UNSHUFFLE, RESET, START_ANIM, STOP_ANIM } from '../constants/actions'

export const add_sphere = playload => {

    return {
        type: ADD_SPHERE, playload
    }
}

export const shuffle = () => {

    return {
        type: SHUFFLE
    }
}

export const unshuffle = () => {

    return {
        type: UNSHUFFLE
    }
}

export const reset = () => {

    return {
        type: RESET
    }
}

export const start_anim = () => {

    return {
        type: START_ANIM
    }
}

export const stop_anim = () => {

    return {
        type: STOP_ANIM
    }
}