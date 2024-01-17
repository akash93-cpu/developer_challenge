import React from 'react';
import axiosInstance from '../axios.js';
import { useHistory } from 'react-router-dom';

export default function Add() {
    const history = useHistory();

    const initialFormData = Object.freeze({
        name: '',
        year: '',
        type: '',
        varietal: '',
        rating: 0.0,
        consumed: false,
        date_consumed: '',
    });

    // const varietals = ["Cabernet Sauvignon","Merlot", "Shiraz", "Chenin Blanc", "Sauvignon Blanc",
    //     "Verdelho", "Chardonnay", "Durif", "Malbec", "Pinot noir"];

    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance
            .post(`wine/wines/create/`, {
                name: formData.name,
                year: formData.year,
                type: formData.type,
                varietal: formData.varietal,
                rating: formData.rating,
                consumed: formData.consumed,
                date_consumed: formData.date_consumed,

            })
            .then((res) => {
                history.push('/home');
            });
    };

    return (
        <>
        <form style={{margin: '200px', marginTop: '50px'}}>
            <h2>Add an entry</h2>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name</label>
      <input type="text" class="form-control" name='name' required onChange={handleChange}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Year</label>
      <input type="text" class="form-control" name='year' required onChange={handleChange}/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Type</label>
    <input type="text" class="form-control" name='type' required onChange={handleChange}/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Rating</label>
    <input type="number" name='rating' step="0.1" min={1.0} max={5.0} required onChange={handleChange} class="form-control" id="inputAddress2"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputState">Varietal</label>
      <select name='varietal' class="form-control" required onChange={handleChange}>
        <option selected>Choose...</option>
        <option>Cabernet Sauvignon</option>
        <option>Merlot</option>
        <option>Shiraz</option>
        <option>Chenin Blanc</option>
        <option>Sauvignon Blanc</option>
        <option>Verdelho</option>
        <option>Chardonnay</option>
        <option>Durif</option>
        <option>Malbec</option>
        <option>Pinot noir</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Date Consumed</label>
      <input type="date" class="form-control" name='date_consumed' placeholder='yyyy-mm-dd' required onChange={handleChange}/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" name='consumed' required onChange={handleChange}/>
      <label class="form-check-label" for="gridCheck">
        Consumed?
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>+ Add</button>
</form>
        </>
    )
}