import React from 'react'

import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


const MoldingForm = ({handleChange}) => {
 
  return (
    <>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Equipment</Form.Label>
          <Form.Control type="text" placeholder="Equipment" name='equipment' onChange={handleChange}/>
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Tool</Form.Label>
          <Form.Select aria-label="Default select example" name='tool' onChange={handleChange}>
            <option>Tool...</option>
            <option value="tool1">tool1</option>
            <option value="tool1">tool1</option>
            <option value="tool1">tool1</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Materials</Form.Label>
          <Form.Select aria-label="Default select example" name='materials' onChange={handleChange}>
            <option>Materials...</option>
            <option value="mat1">mat1</option>
            <option value="mat2">mat2</option>
            <option value="mat3">mat3</option>
          </Form.Select>
        </Form.Group>
      </Row>

    </>
  )
}

export default MoldingForm