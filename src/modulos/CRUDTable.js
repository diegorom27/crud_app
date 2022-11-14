import React, { useEffect } from 'react'
import CRUDTableRow from './CRUDTableRow'

const CRUDTable=({datos,dataToEdit,setDataToEdit,deleteData})=>{
    
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Constelacion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datos.length===0?
                        <td colSpan='3'>No hay datos</td>: 
                        datos.map(element =>  <CRUDTableRow dato={element} 
                                                            dataToEdit={dataToEdit} 
                                                            setDataToEdit={setDataToEdit} 
                                                            key={element.id}
                                                            deleteData={deleteData}/>)
                    }
                </tbody>
            </table>
        </div>
    )   
}
export default CRUDTable