import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { useFirebase } from '../Context/Firebase';



function BasicExample() {

    const firebase = useFirebase();
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  const handelSubmit=async(e)=>{
 e.preventDefault();
 const result = await firebase.signup(email ,password)
 console.log(result)
  }

  return (
    <Form className='mt-10 ml-10 ' onSubmit={handelSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"   onChange={e=> setEmail(e.target.value)} value={email}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)} value={password} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
       Create 
      </Button>
    </Form>
  );
}

export default BasicExample;