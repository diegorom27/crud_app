import React,{useState} from 'react'
import CRUDForm from './CRUDForm'
import CRUDTable from './CRUDTable'

const CRUDApp =(props)=>{
    
const initialData =[
    {
        id: 1,
        nombre:'Seiya',
        constelacion:'Pegasso'
    },
    {
        id: 2,
        nombre:'Shinryu',
        constelacion:'Dragon'
    },
    {
        id: 3,
        nombre:'Hyoga',
        constelacion:'Cisne'
    },
    {
        id: 4,
        nombre:'Shun',
        constelacion:'Andromeda'
    },
    {
        id: 5,
        nombre:'Ikki',
        constelacion:'Fenix'
    },
]
    const [data,setData]=useState(initialData)
    const [dataToEdit,setDataToEdit]=useState(null)

    const createData=(dato)=>{
        data.length>0?dato.id = data[data.length-1].id+1:dato.id=1
        setData([...data,dato])
    }
    const updateData=(data1)=>{
        const newData = data.map((element)=>(element.id!==data1.id)?element:data1)
        setData(newData)
    }
    const deleteData=(id)=>{
        const newData = data.filter(element=>element.id!==id)
        setData(newData)
    }

    return(
        <>
            <h1>{props.titulo}</h1>
            <CRUDForm datos={data} 
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit}/>
            <CRUDTable datos={data}
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}/>
        </>
    )
}
CRUDApp.defaultProps ={
    titulo:'CRUDApp',
}
export default CRUDApp
