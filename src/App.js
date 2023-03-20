import Home from "./pages/Home"
import index6 from "./pages/index6"
import index2 from "./pages/index2";
import index3 from "./pages/index3";
import index7 from "./pages/index7";
import index5 from "./pages/index5";
import index4 from "./pages/index4";


import Header from "./components/Header";
import Footer from "./components/Footer";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/index2" Component={index2}/>
            <Route path="/index3" Component={index3}/>
            <Route path="/index4" Component={index4}/>
            <Route path="/index5" Component={index5}/>
            <Route path="/index6" Component={index6}/>
            <Route path="/index7" Component={index7}/>
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
