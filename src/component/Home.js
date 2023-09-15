import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
  return (
    <div>
      <div>
        <h1>Home page</h1>
        <button onClick={()=>navigate("order",{replace:true})}>
          Order Now</button>
      </div>
    </div>
  )
}

export default Home
