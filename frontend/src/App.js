import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from "./components/SignUp"
import Login from './components/Login'
import Private from './components/Private'
import Footer from "./components/Footer"
import AddPrescription from './components/AddPrescription';
import PrescriptionList from './components/PrescriptionList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Private />}>
            <Route path="/" element={<PrescriptionList />} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
            <Route path="/add" element={<AddPrescription/>} />
            <Route path="/update" element={<h1>Update Item Component</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
