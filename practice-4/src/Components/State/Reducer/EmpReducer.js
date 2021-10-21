const initialState = [
    { name: "Afroz", age: "20", city: "Nanded" },
    { name: "Muskan", age: "30", city: "Naka" },
    { name: "Faizan", age: "19", city: "Degloor" },
]

export const Emp = (state, action) => {
    switch (action.type) {
        case "ADD_EMP":
            return {
                ...state,
                Emp: [actionEmp, ...stateEmp]
            }
        default: return state;
    }
}