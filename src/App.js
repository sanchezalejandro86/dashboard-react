import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/movements" component={Dashboard} />
                
                <Redirect from="/" to="/movements" />
            </Switch>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
