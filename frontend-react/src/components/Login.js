import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios.js';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styles.scss';

export default function SignIn() {
    const history = useHistory();
    
    const initialFormData = Object.freeze({
        email: '',
        password: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
        .post(`token/`, {
            email: formData.email,
            password: formData.password,

        })
        .then((res) => {
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            axiosInstance.defaults.headers['Authorization'] =
                ' JWT ' + localStorage.getItem('access_token');
            history.push("/home");
        }, reasons => {
            alert("Login Failed!");
        })

    };

    return (
      <div style={{margin: '100px'}}>
        <Form>
          <h2 style={{textAlign: 'center'}}>Welcome to the Wines App</h2>
          <h5 style={{textAlign: 'center'}}>Please Login</h5>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
    );

}