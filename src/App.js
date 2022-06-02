import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Explore from './pages/Explore'
import Offer from './pages/Offer'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUP from './pages/SignUp'
import NavBar from './components/NavBar'



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offer' element={<Offer />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUP />} />
        </Routes>
        <NavBar />
      </Router>
    </>

  );
}

export default App;
