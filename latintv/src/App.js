import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Home from './Pages/Home'
import ChatBotLatin from './Components/ChatBotLatin'
import MyCalendar from './Components/Calendar';
import CategoriaRegular from './Pages/CategoriaRegular'
import CategoriaPrime from './Pages/CategoriaPrime'
import CategoriaSuperPrime from './Pages/CategoriaSuperPrime'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/CategoriaRegular"><CategoriaRegular/></Route>
        <Route exact path="/CategoriaPrime"><CategoriaRegular/></Route>
        <Route exact path="/CategoriaSuperPrime"><CategoriaSuperPrime/></Route>
        <Route path="/chatbot"><ChatBotLatin /></Route>
        <Route path="/calendar"><MyCalendar/></Route>
      </Switch>
      {/* { isLogin && <Redirect to="/home" />} */}
    </Router>
  );
};
export default App;