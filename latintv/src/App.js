import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            {/* <Route exact path='/mesero/RealizarPedido' component={Page2}/> */}
            <Route component={Home}/>
        </Switch>
    );
}

export default App;

