import { useState } from "react";
import React from "react";
import axiosInstance from "../axios";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
import { useHistory } from "react-router-dom";

export default function Homepage() {
  const history = useHistory();
  const [rows, setRows] = useState({ val: [] });

  React.useEffect(() => {
    axiosInstance.get(`wine/wines/list/`).then((res) => {
      setRows({
        val: res.data,
      });
      console.log(res.data);
    });

  }, [setRows])
  
  const handleClickToAdd = () => {
    history.push("/add");
  }

  const handleClicktoEdit = () => {
    history.push("/edit/:id");
  }

    return (
      <>
      <div style={{margin: '25px'}}>
      <Button onClick={handleClickToAdd} variant="primary">+ Add</Button>{' '}
      </div>
      <div style={{margin: '100px' }}>
        
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Year</th>
            <th>Type</th>
            <th>Rating</th>
            <th>Consumed</th>
            <th>Date Consumed</th>
            <th>Varietal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.val.map((row) => (
            
          <tr key={row}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.year}</td>
            <td>{row.type}</td>
            <td>{row.rating}</td>
            <td>{row.consumed.toString()}</td>
            <td>{row.date_consumed}</td>
            <td>{row.varietal}</td>
            <td><Button onClick={handleClicktoEdit}>Edit</Button></td>

          </tr>
          ))}

        </tbody>
      </Table>
    </div>
      </>
    )
}