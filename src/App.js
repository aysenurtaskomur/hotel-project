import { Route, Switch, } from 'react-router-dom';
import HotelAdd from './pages/hotelAdd';
import HotelList from './pages/hotelList'

const App = () => {
  return (
      <Switch>
        <Route exact path="/" component={HotelList}/>
        <Route path="/add" component={HotelAdd}/>
      </Switch>
  );
}

export default App;
