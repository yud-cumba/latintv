import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login';
import ChatBotLatin from './Components/ChatBotLatin'
import MyCalendar from './Components/Calendar';
import ReservedPage from './Pages/ReservedPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/chatbot">
            <ChatBotLatin />
        </Route>
        <Route path="/calendar">
            <MyCalendar/>
        </Route>
        <Route path="/reserva">
            <ReservedPage/>
        </Route>
      </Switch>
      {/* { isLogin && <Redirect to="/home" />} */}
    </Router>
  );
};
export default App;