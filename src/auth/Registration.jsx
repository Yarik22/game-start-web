import React, { useState } from 'react';
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    gender:'',
    age:'',
  });

  const { firstName, lastName, email, password, password2, gender, age } = formData;

  const onChange = (e) => 
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.error('Passwords do not match');
    } else {
      console.log(formData);
      fetch("http://localhost:4000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  return (
    <>
    <div className='form-container'>
      <h1>Sign Up</h1>
      <form method="post" onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={lastName}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <select
            name='gender'
            value={gender}
            onChange={onChange}
            required
          >
            <option value='' disabled>
              Select your gender
            </option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div className='form-group'>
          <select
            name='age'
            value={age}
            onChange={onChange}
            required
          >
            <option value='' disabled>
              Select your age
            </option>
            <option value='18-24'>18-24</option>
            <option value='25-34'>25-34</option>
            <option value='35-44'>35-44</option>
            <option value='45+'>45+</option>
          </select>
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
            minLength='8'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={onChange}
            minLength='8'
          />
        </div>
        <input type='submit' value='Register' />
      </form>
    </div>
    </>
  );
};

export default Register;