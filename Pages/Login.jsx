import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import React, { useState , useEffect} from 'react';
import { useFirebase } from '../Context/Firebase';



function Login() {

    const firebase = useFirebase();
    const navigate = useNavigate();
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  useEffect(()=>{
    if(firebase.isLoggedIn){
        navigate('/')
    }
  },[firebase, navigate])
  const handelSubmit=async(e)=>{
 e.preventDefault();
 const result = await firebase.LoginUser(email ,password)
 console.log(result)
  }

  return (
    <div>
    <Form className='mt-10 ml-10 ' onSubmit={handelSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"   onChange={e=> setEmail(e.target.value)} value={email}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)} value={password} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
       Login
      </Button>
    </Form>
    <h1 className='m-10'>Or</h1>
    <Button variant='danger' className='ml-10' onClick={firebase.signinGoogle}>Signin with Google   </Button>
    </div>
  );
}

export default Login;