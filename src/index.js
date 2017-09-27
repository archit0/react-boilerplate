import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom'
export const renderRoutes = () => (
    <BrowserRouter>
        <Route path="/" component={App}>
        </Route>
    </BrowserRouter>);

ReactDOM.render(renderRoutes(), document.getElementById('app'));
