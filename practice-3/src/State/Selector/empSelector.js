export const empSelector = (state, action) => {
    switch ("ADD_PRODUT") {
        case action.type:
            return {
                ...state,
                getAllemp: [actionemp, ...stateemp],
            }
        default:
            return
    }
}
