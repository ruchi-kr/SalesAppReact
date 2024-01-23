import './App.css';                                   //importing css file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//importing BrowserRouter, Routes, Route from react-router-dom

import Navbar from './Components/Navbar';          //importing Navbar component
import AddSales from './Pages/AddSales';           //importing AddSales component
import TopSales from './Pages/TopSales';           //importing TopSales component
import TotalRev from './Pages/TotalRev';          //importing TotalRev component
import Login from './Pages/Login';                //importing Login component
import Register from './Pages/Register';          //importing Register component
function App() {                                  //App component
  return (                                       //returning the JSX
    <>                                           {/* fragment tag*/}
      <Router>                                    {/* BrowserRouter as Router*/}
      <Navbar />
        <Routes>                               
          <Route path="/" element={<AddSales />}></Route>
          <Route path="/addsales" element={<AddSales />}></Route>
          <Route exact path="/topsales" element={<TopSales />}></Route>
          <Route exact path="/totalrev" element={<TotalRev />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
       </Router> 
    </>
  );
}

export default App;                             //exporting App component
