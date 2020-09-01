import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login';
import ChatBotLatin from './Components/ChatBotLatin'
import MyCalendar from './Components/Calendar';
import ReservedPage from './Pages/ReservedPage';
import CategoriaRegular from './Pages/CategoriaRegular'
import CategoriaPrime from './Pages/CategoriaPrime'
import CategoriaSuperPrime from './Pages/CategoriaSuperPrime'
import VerifyPage from './Pages/VerifyPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/CategoriaRegular"><CategoriaRegular/></Route>
        <Route exact path="/CategoriaPrime"><CategoriaRegular/></Route>
        <Route exact path="/CategoriaSuperPrime"><CategoriaSuperPrime/></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/chatbot"><ChatBotLatin /></Route>
        <Route exact path="/calendar"><MyCalendar/></Route>
        <Route exact path="/reserva" component ={ReservedPage} ></Route>
        <Route exact path="/verifica-tu-reserva" component= {VerifyPage}></Route>
      </Switch>
      {/* { isLogin && <Redirect to="/home" />} */}
    </Router>
  );
};
export default App;