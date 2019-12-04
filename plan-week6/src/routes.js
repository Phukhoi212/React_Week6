import React from 'react';
import Home from './containers/Home/Home';
import Detail from './containers/Details/Detail'
//import SignIn from './components/Login/Login'



const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },

    {
        path : '/employees/:id',
        exact : true,
        main : () => <Detail />
    },

];

export default routes;