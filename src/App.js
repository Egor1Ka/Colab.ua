import { Route } from 'react-router';
import './App.css';
import Basket from './component/Basket/Basket';
import CardMap from './component/CardMap/CardMap';
import Header from './component/Header/Header';
import Input from './component/Input/Input';
import Main from './component/Main/Main';
import Menu from "./component/menu/Menu";
import ShopMenu from './component/ShopMenu/ShopMenu';



function App() {
  return (
    <div className="App">
      <Header/>
      <Route path = '/Colab.ua' render={()=><Main/>}/>
      <Route path = '/basket' render = {()=><Basket/>}/>
    </div>
  );
}

export default App;
