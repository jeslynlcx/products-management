import { useState } from 'react';
import './Register.css';
import axios from 'axios'

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([])

  const newUser = { email, password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 💡 Add your Register / authentication logic here
    console.log('Form submitted:', { email, password });
    try {
        const response = await axios.post("http://localhost:3000/users/register", {
            email,
            password
        })
        console.log("Register successful: ", response.data)
        setUsers([...users, response.data])
        alert("Register successful")
        setEmail('')
        setPassword('')
    }catch (error) {
        console.log('Register Error: ',error)
    }
  };

  return (
    <div className="Register-wrapper">
      <form onSubmit={handleSubmit} className="Register-card">
        <h2>Sign Up</h2>
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <button type="submit" className="Register-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register