import { useState } from 'react';
import React, { useEffect } from 'react'
import {Container, Form, Row, Col, Button } from 'react-bootstrap';

const EditProfile = ({ data, onSubmit }) => {
    const edit = (data !== null);

    const [formData, setFormData] = useState({
        id: data?.id || '',
        uid: data?.uid || '',
        avatar: data?.avatar || '',
        firstName: data?.firstName || '',
        lastName: data?.lastName || '',
        email: data?.email || '',
        address: data?.address || '',
        dob: data?.dob || '',
        tel: data?.tel || '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <Container>
            <Row className="mb-3">
                <Col sm="4"><h2>{edit ? 'Edit' : 'New'} Profile</h2></Col>
            </Row>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">Avatar:</Form.Label>
                    <Col sm="8">
                        <Form.Control style={{color:'#000000'}} name="avatar" type='text' placeholder='Image url' onChange={handleChange} value={formData.avatar}></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">First Name:</Form.Label>
                    <Col sm="8">
                        <Form.Control style={{color:'#000000'}} name="firstName" type='text' placeholder='First Name' onChange={handleChange} value={formData.firstName}></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">Last Name:</Form.Label>
                    <Col sm="8">
                        <Form.Control style={{color:'#000000'}} name="lastName" type='text' placeholder='Last Name' onChange={handleChange} value={formData.lastName}></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">Email:</Form.Label>
                    <Col sm="8">
                        <Form.Control style={{color:'#000000'}} name="email" type='text' placeholder='example@gmail.com' onChange={handleChange} value={formData.email}></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">Address:</Form.Label>
                    <Col sm="8">
                        <Form.Control style={{color:'#000000'}} name="address" type='text' placeholder='Address' onChange={handleChange} value={formData.address}></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">Date of Birth:</Form.Label>
                    <Col sm="8">
                        <Form.Control style={{color:'#000000'}} name="dob" type='text' placeholder='YYYY-MM-DD' onChange={handleChange} value={formData.dob}></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">Phone:</Form.Label>
                    <Col sm="8">
                        <Form.Control style={{color:'#000000'}} name="tel" type='text' placeholder='Phone Number' onChange={handleChange} value={formData.tel}></Form.Control>
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default EditProfile