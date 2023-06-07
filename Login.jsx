import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from 'react';

const schema = yup.object({
    firstName: yup.string().min(3).max(20).required(),
    email: yup.string().email().required(),
    phonenumber:yup.number().min(11).required(),
    password:yup.string().required().max(8),
  }).required();
  

const Login = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data => console.log(data);
    
      const [state, setState]=useState({
          name:"",
          email:"",
          password:"",
          phonenumber:""
      })
      const [arraydata, setArrayData]=useState([])


      const handleChange=(event)=>{
        console.log({...state,[event.target.name]:event.target.value})
         setState({...state,[event.target.name]:event.target.value})
         }
  
      const click=(e)=>{
            arraydata.push(state);
         setArrayData([...arraydata]);
          console.log(arraydata.value);
      }
      return (
    <div className='login'>
        <h3>Log In</h3>
     
        <form id='form' className='col-md-6' onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6" >
    <label className="form-label">Name</label><br></br>
    <input type="text" name='name'  onChange={handleChange}{...register("firstName")} className="form-control"style={{height:"30px", width:"300px"}} />
    <p>{errors.firstName?.message}</p>

  </div>
 
  <div className="mb-6" >
    <label className="form-label">Mobile Number</label><br></br>
    <input type="text" name='phonenumber' onChange={handleChange} {...register("phonenumber")}className="form-control"style={{height:"30px", width:"300px"}} />
    <p>{errors.phonenumber?.message}</p>

  </div>
 
  <div className="mb-6" >
    <label className="form-label">Email address</label><br></br>
    <input type="email" name='email' onChange={handleChange} {...register("email")}className="form-control"style={{height:"30px", width:"300px"}} />
    <p>{errors.email?.message}</p>

  </div>
  <div className="mb-6">
    <label  className="form-label">Password</label><br></br>
    <input type="password" name='password'  onChange={handleChange}{...register("password")} className="form-control" style={{height:"30px", width:"300px"}}/><br></br>
    <p>{errors.password?.message}</p>

  </div>
  <div className="mb-6 form-check">
    <input type="checkbox" className="form-check-input" style={{height:"20px", width:"20px", margin:"7px"}}/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" id='button' onClick={click}>Submit</button>
</form>

<div>
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>password</th>
            <th>phonenumber</th>

        </tr>
{
    arraydata.map((item,i)=>{
     const {name,email,password,phonenumber}=item
     return (
           <tr key={i}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{phonenumber}</td>

            </tr>
     )
    })
}
</table>

</div>
</div>

)
}

export default Login