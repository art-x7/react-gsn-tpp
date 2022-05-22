import React, {useState} from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


const TppForm = ({handleSubmit, handleChange, formDataTpp}) => {

  return (
    <>
      <div className='container mainForm'>
        <Form>
          <h4>Создание ТПП изделия</h4>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Продукт</Form.Label>
              <Form.Control 
                value={formDataTpp.nameTpp}
                type="text" 
                placeholder="Наименование продукта" 
                name='nameTpp' 
                onChange={handleChange}/>
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Стадия ТПП</Form.Label>
              <Form.Select 
                value={formDataTpp.stageTpp}
                aria-label="Default select example" 
                name='stageTpp' 
                onChange={handleChange}>
                <option>Выбор...</option>
                <option value="TPPSingD">ТПП Единичных изделий</option>
                <option value="TTPSerialD">ТПП Серийных изделий</option>
              </Form.Select>
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Номер ТПП</Form.Label>
              <Form.Control 
                value={formDataTpp.numberTpp}
                type="text" 
                placeholder="Номер ТПП" 
                name='numberTpp' 
                onChange={handleChange}/>
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Менеджер проекта</Form.Label>
              <Form.Control 
                value={formDataTpp.ownerTpp}
                type="text" 
                placeholder="ФИО" 
                name='ownerTpp' 
                onChange={handleChange}/>
            </Form.Group>
          </Row>
  
          <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
            <Form.Control 
              value={formDataTpp.commentTpp}
              as="textarea" 
              placeholder="Leave a comment here" 
              name='commentTpp' 
              onChange={handleChange}/>
          </FloatingLabel>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Отправить
          </Button>
        </Form>
      </div>
    </>
  )
}

export default TppForm