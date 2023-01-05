

export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'
export type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            /*const stateCopy = {...state}
            stateCopy.collapsed = !state.collapsed*/
            const stateCopy = {
                ...state,
                collapsed: !state.collapsed//перезатираем св-во
            }
            return stateCopy
        default:
            throw new Error('Bad action type')
    }
    return state
}