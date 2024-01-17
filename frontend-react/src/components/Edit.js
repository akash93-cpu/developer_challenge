import React from 'react';
import axiosInstance from '../axios.js';
import { useHistory, useParams } from 'react-router-dom';

export default function Edit() {
    const history = useHistory();
    const { id } = useParams();

    const initialFormData = Object.freeze({
        name: '',
        year: '',
        type: '',
        varietal: '',
        rating: 0.0,
        consumed: false,
        date_consumed: '',
    });

    const [formData, updateFormData] = React.useState(initialFormData);

    React.useEffect(() => {
        axiosInstance.get('wine/wines/edit/03/').then((res) => {
            updateFormData({
                ...formData,
                ['name']: res.data.name,
                ['year']: res.data.year,
                ['type']: res.data.type,
                ['varietal']: res.data.varietal,
                ['rating']: res.data.rating,
                ['consumed']: res.data.consumed,
                ['date_consumed']: res.data.date_consumed,
            });
            
        });
    }, [updateFormData]);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.put(`wine/wines/edit/03/`, {
            name: formData.name,
            year: formData.year,
            type: formData.type,
            varietal: formData.varietal,
            rating: formData.rating,
            consumed: formData.consumed,
            date_consumed: formData.date_consumed, 
        });
        history.push('/home');
        window.location.reload();
    }

    return (
        <>
        <form style={{margin: '200px', marginTop: '50px'}}>
            <h2>Edit</h2>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name</label>
      <input type="text" class="form-control" name='name' value={formData.name} required onChange={handleChange}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Year</label>
      <input type="text" class="form-control" name='year' value={formData.year} required onChange={handleChange}/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Type</label>
    <input type="text" class="form-control" name='type' value={formData.type} required onChange={handleChange}/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Rating</label>
    <input type="number" name='rating' step="0.1" 
    min={1.0} max={5.0} required value={formData.rating} onChange={handleChange} class="form-control" />
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputState">Varietal</label>
      <select name='varietal' class="form-control" value={formData.varietal} required onChange={handleChange}>
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
      <input type="date" class="form-control" name='date_consumed' 
      value={formData.date_consumed} placeholder='yyyy-mm-dd' required onChange={handleChange}/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" name='consumed' 
      value={formData.consumed} required onChange={handleChange}/>
      <label class="form-check-label" for="gridCheck">
        Consumed?
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
        </>
    )
}