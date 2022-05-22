import React from 'react'
import Table from 'react-bootstrap/Table'
import './TppTable.css'


const TppTable = ({formDataTpp}) => {
  
  return (
    <div className='container myTable'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Продукт</th>
            <th>Стадия ТПП</th>
            <th>Номер ТПП</th>
            <th>Менеджер проекта</th>
            <th>Комментарий</th>
          </tr>
        </thead>
        <tbody>
          {[formDataTpp].map((el) =>
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.nameTpp}</td>
              <td>{el.stageTpp}</td>
              <td>{el.numberTpp}</td>
              <td>{el.ownerTpp}</td>
              <td>{el.commentTpp}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
    
  )
}

export default TppTable
