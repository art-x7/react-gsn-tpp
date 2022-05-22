import React, {useState} from 'react'
import TppForm from '../myForms/TppForm'
import TppTable from '../myTables/TppTable'

const TPP = () => {
  const initialStateTpp = {
    id: '',
    nameTpp:'',
    stageTpp: '',
    numberTpp: '',
    ownerTpp: '',
    commentTpp: ''
  }

  const [formDataTpp, setFormDataTpp] = useState(initialStateTpp)

  const handleChange = (e) => {
    setFormDataTpp({...formDataTpp, id: Date.now(), [e.target.name]: e.target.value.trim()})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formDataTpp)
    setFormDataTpp({...initialStateTpp})
  }
  
  return (
    <>
      <TppForm handleChange={handleChange} handleSubmit={handleSubmit} formDataTpp={formDataTpp}/>
      <TppTable formDataTpp={formDataTpp}/>
    </>
  )
}

export default TPP