import React, { useEffect, useState } from "react";
import { useSelector, useDisparch } from "react-redux"
import { getAllEmp } from '../State/Reducer/EmpReducer'

export const Empdata = () => {
    const selector = useSelector(getAllEmp)
    const [empData, setEmpData] = useState()
    useEffect(() => {
        setEmpData = (selector);
    }, [selector]);
    return (
        <div>
            <h3>EmpName:</h3>
            <h3>EmpAge:</h3>
            <h3>EmpCity:</h3>
        </div>
    )
}