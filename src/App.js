
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Fish from './Fish/Fish';
import Header from './Header/Header';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Restaurant from './Restaurant/Restaurant';

function App() {
  return (
    <div className="App">

      <Header></Header>
      {/* <Restaurant></Restaurant> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/fish' element={<Fish></Fish>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
