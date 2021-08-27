import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Menu } from './comfonent/menu';
import { Contents } from './comfonent/contents';
import { Home } from './contents/home';
import Route from "react-router-dom/es/Route";

export const Server = props => {
  return (
    <BrowserRouter>
      <Menu />
      <Route path="/home" component={Home}></Route>
      <Contents />
    </BrowserRouter>
  )
}