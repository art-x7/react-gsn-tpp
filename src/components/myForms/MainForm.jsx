import React, {useState} from 'react'
import './MainForm.css'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

import AttachPrintForm from './AttachPrintForm'
import MoldingForm from './MoldingForm'
import WireBondForm from './WireBondForm'


const MyForm = () => {
  const initialState = {
    productName: '',
    processName: '',
    lotNumber: '',
    qtyIn: '',
    qtyOut: '',
    defects: '',
    equipment: '',
    tool: '',
    materials: '',
    comment: '',
  }
    
  const [formData, setFormData] = useState(initialState)
  const [checkProcess, setCheckProcess] = useState()
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value.trim()})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
    
  const getProcessName = (e) => {
    setCheckProcess(e.target.value)
  }

  const myArrayForms = [
    {id: 1, name: 'AP', form: <AttachPrintForm handleChange={handleChange}/> },
    {id: 2, name: 'WB', form: <WireBondForm handleChange={handleChange}/> },
    {id: 3, name: 'MD', form: <MoldingForm handleChange={handleChange}/> },
  ]

  const equalProcess = () => {
    const process = myArrayForms.find(pro => pro.name == checkProcess)
    return process ? process.form : ''
  }
  const processFunctions = (e) => {
    getProcessName(e);
    handleChange(e);
  }

  return (
    <div className='container mainForm'>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Select aria-label="Default select example" name='productName' onChange={handleChange}>
            <option>Product...</option>
            <option value="GS1">GS1</option>
            <option value="Nand">Nand</option>
            <option value="Micron">Micron</option>
          </Form.Select>
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Process</Form.Label>
          <Form.Select aria-label="Default select example" value={checkProcess} onChange={processFunctions} name='processName'>
            <option>Process...</option>
            <option value="AP">Attach Print</option>
            <option value="WB">Wire Bond</option>
            <option value="MD">Molding</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Lot Number</Form.Label>
          <Form.Control type="text" placeholder="Lot Number" name='lotNumber' onChange={handleChange}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Q-ty in</Form.Label>
          <Form.Control type="text" placeholder="Q-ty in" name='qtyIn' onChange={handleChange}/>
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Q-ty out</Form.Label>
          <Form.Control type="text" placeholder="Q-ty out" name='qtyOut' onChange={handleChange}/>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Q-ty Defects</Form.Label>
          <Form.Control type="text" placeholder="Q-ty Defects" name='defects' onChange={handleChange}/>
        </Form.Group>
      </Row>
      
      {equalProcess()}

      
      <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here" name='comment' onChange={handleChange}/>
      </FloatingLabel>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  </div>
  )
}

export default MyForm