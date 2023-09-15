import {Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Navbar from './component/Navbar';
import Nomatch from './component/Nomatch';
import Product from './component/Product';
import New from './component/New';
import Best from './component/Best';
import Order from './component/Order';
import User from './component/User';
import UserDet from './component/UserDet';
import Profile from './component/Profile';
import Login from './component/Login';
import { AuthProvider } from './component/auth';
import RequiredAuth from './component/RequiredAuth';
import Signup from './component/signup';
import LoginSuccess from './component/LoginSuccess';
import SignupSuccess from './component/Signupsuccess';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<RequiredAuth><About/></RequiredAuth>}></Route>
      <Route path='/service' element={<Service/>}/>
      <Route path='*' element={<Nomatch/>}/>
      <Route path="/product" element={<Product/>}>
        <Route path="new" element={<New/>}/>
        <Route path="best" element={<Best/>}/>
        <Route index element={<New/>}/>
      </Route>
      <Route path="/order" element={<Order/>}/>
      <Route path="/user" element={<User/>}>
      <Route path=":userid" element={<UserDet/>}/>
      </Route>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/profile" element=
      {<RequiredAuth><Profile/></RequiredAuth>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/loginsuccess" 
      element={<LoginSuccess/>}/>
      <Route path="/signupsuccess" 
      element={<SignupSuccess/>}/>
     </Routes>
     </AuthProvider>
    </div>
  );
}

export default App;
