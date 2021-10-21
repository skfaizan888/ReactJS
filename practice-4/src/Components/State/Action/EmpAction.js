export const EmpAction = (Name, Age, City) => ({
    type="ADD_EMP",
    emp: {
        Name,
        Age,
        City,
    },
})