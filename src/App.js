import {Routes,Route} from 'react-router-dom'
import Layout from './Layout';
import Signin from './Comp/Signin';
import Signup from './Comp/Signup';
import Goal from './Comp/Goal';
import Tracker from './Comp/Tracker';
import Shedule from './Comp/Shedule';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}/>
          {/* <Route path='/Home' element={<Home/>} /> */}
          <Route path='/Signin' element={<Signin/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Goal' element={<Goal/>}/>
          <Route path='/Tracker' element={<Tracker/>}/>
          <Route path='/Shedule' element={<Shedule/>}/>
          {/* <Route path='/Home1' element={<Home1/>} /> */}
        </Routes>
    </div>
  );
}

export default App;
