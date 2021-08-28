import './App.css';
import { Menu } from './component/menu';
import Contents from './component/contents';
import { Home } from './contents/home';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Location from './component/Location';
import Table from './component/Table';
import Modify from './component/Modify';
import Writer from './component/Writer';

export const Server = props => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
      <Route path="/Home" component={Home}/>
          <Route path="/board" component={Table}/>
          <Route path="/eat" component={Location}/>
          <Route path="/write" component={Writer}/>
          <Route path="/modify" component={Modify}/>
          <Contents />
      </Switch>
    </BrowserRouter>
  )
}