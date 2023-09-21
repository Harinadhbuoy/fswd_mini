import './App.css';
import Login from './components/login_signup/login';
// import Signup from './components/signup/signup';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Userdashboard from './layouts/userdashboard/userdashboard';
import AdminHomePage from './components/admin_components/adminhome/adminhome';
import ManageTourPackages from './components/admin_components/adminmanage/adminmanage';
import Admindashboard from './layouts/admindashboard/admindashboard';
import TourForm from './components/admin_components/addtourpackage/addtourpackage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path="/" element={<Login/>} /> 
       <Route path="/userdashboard" Component={Userdashboard}/>
       <Route path="/admindashboard" Component={Admindashboard}/>
       <Route path="/addtourpackage" Component={TourForm}/>
       </Routes>
     </BrowserRouter>
     {/* <TourForm/> */}
    </div>  
  );
}

export default App;
















/* <BrowserRouter>
       <Routes>
       <Route path="/" element={<Login/>} /> 
       <Route path="/userHomePage" Component={userHomePage}/>
       </Routes>
     </BrowserRouter> */