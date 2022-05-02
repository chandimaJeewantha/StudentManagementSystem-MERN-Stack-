import './App.css';
import Header from './components/Header';
import AddStudent from './components/addStudent';
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllStudent from './components/AllStudents';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <div>
          <Header />
          <Route path="/add" exact element={AddStudent} />
          <Route path="/" exact element={AllStudent} />
        </div>
      </Router>
    </BrowserRouter>
  );
}

export default App;
