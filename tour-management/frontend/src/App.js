import './App.css';
import Login from './components/login_signup/login';
// import Signup from './components/signup/signup';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<Login/>} /> 
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
