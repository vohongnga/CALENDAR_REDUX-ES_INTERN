import './App.css';
import Month from './components/Month';
import Calendar from './components/Calendar';
import AddWork from './components/AddWork';
import { Col, Container,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
function App() {
  
  return (
    <div class="container left">
        <Month />
        <Calendar />
        <AddWork />
    </div>
          
  );
}

export default App;
