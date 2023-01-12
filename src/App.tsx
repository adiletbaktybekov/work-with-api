import React from 'react';
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";
import Router from "./components/Router";

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/route' element={<Router/>}/>
            </Routes>
        </>
    );
}