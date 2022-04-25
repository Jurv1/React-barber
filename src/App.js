import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Header from './Components/HeaderComp/Header';
import MainPage from './Components/MainPage/MainPage';
import MastersContainer from './Components/Masters/MastersContainer';
import OnlineContainer from './Components/Online/OnlineContainer';

function App(props) {
  return (
    
      <div className="wrapper">
          <Header  items={props.store.getState().headerPageReducer.items} />
          
          <Routes className='page'>
            <Route path='' element = {<MainPage   texts={props.store.getState().mainPageReducer.texts} amounts={props.store.getState().mainPageReducer.amounts} stations={props.store.getState().mainPageReducer.stations} addresses={props.store.getState().mainPageReducer.addresses}/>}/>
            <Route path='/blog' element={<Blog   />} />
            <Route path='/masters' element={<MastersContainer  />} />
            <Route path='/online' element={<OnlineContainer  />} />
          </Routes>

          <Footer />
      </div>
    
  );
}
// post={props.state.postPageReducer} dispatch = {props.store.dispatch}
export default App;
