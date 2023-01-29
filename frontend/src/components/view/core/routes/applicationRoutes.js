import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route, Link
} from 'react-router-dom';
import Home from '../../../components/Home';
import About from '../../../components/About';
//import Contact from './components/Contact';

function applicationRoutes() {

    return <div>
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
    </div>
}