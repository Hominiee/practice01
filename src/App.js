import './App.css';
import Quiz from './components/Quiz';
import Review from './components/Review'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div>
      <div className="bar1">
        <img className='logo' src={require('./images/LabLogo.jpg')}/>
        <p className='logotxt'>VIRTUAL LAB FOR SRI LANKAN A/L STUDENTS</p>
      </div>
      <br/>
      <div className='div1'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Quiz/>}></Route>
            <Route path='review' element={<Review/>}></Route> 
          </Routes>
        </BrowserRouter>
      </div>
    </div>  
  );
}

export default App;
