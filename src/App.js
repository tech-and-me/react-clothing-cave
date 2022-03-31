import {Routes, Route} from 'react-router-dom';
import Home from './routes/homeFolder/Home';
import Nav from './routes/navFolder/Nav';


const Shop = () => {

  return <div>
    <h1>I am the shop component</h1>
    <h1>I am the shop component</h1>
    <h1>I am the shop component</h1>
  </div>
  
}

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Nav />} >
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
        </Route>
    </Routes>
  )
}

export default App;


