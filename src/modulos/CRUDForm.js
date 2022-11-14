import React, { useState,useEffect } from 'react'


const dataDefault={
    id: null,
    nombre:'',
    constelacion:''
}

const CRUDForm=({datos,createData,updateData,dataToEdit,setDataToEdit})=>{

    const [data,setData]= useState(dataDefault)

    useEffect(()=>{
        if(dataToEdit){
            setData(dataToEdit)
        }else{
            setData(dataDefault)
        }
    },[dataToEdit])

    const handleChange =(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const handleOnSubmit =(e)=>{
        e.preventDefault()
        if(data.id==null){
            createData(data)
        }else{
            updateData(data)
        }
        handleOnReset()
    }

    const handleOnReset =(e)=>{
        setData(dataDefault)
        setDataToEdit(null)
    }

    return(
        <div>
            <h4>{dataToEdit===null?'Crear Caballero':'Editar caballero'}</h4>
            <form onSubmit={handleOnSubmit}>
                <input type='text' name='nombre' placeholder='Nombre' onChange={handleChange} value={data.nombre}/>
                <input type='text' name='constelacion' placeholder='Constelación' onChange={handleChange} value={data.constelacion}/>
                <input type='submit' value='Enviar' />
                <input type='reset' value='Borrar' onClick={handleOnReset}/>
            </form>
        </div>
    )   
}
export default CRUDForm