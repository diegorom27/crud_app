import React from 'react'

const CRUDTableRow=({dato,dataToEdit,setDataToEdit,deleteData})=>{

    const handleEdit=(e)=>{
        setDataToEdit(dato)
    }

    const handleDelete=(e)=>{
        deleteData(dato.id)
    }

    return(
        <tr>
            <td>{dato.id}</td>
            <td>{dato.nombre}</td>
            <td>{dato.constelacion}</td>
            <td>
                <input type='button' defaultValue='editar' onClick={handleEdit}/>
                <input type='button' defaultValue='eliminar' onClick={handleDelete}/>
            </td>
        </tr>
    )   
}
export default CRUDTableRow