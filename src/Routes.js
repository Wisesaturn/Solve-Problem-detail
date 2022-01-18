import React from "react";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import element from './Routes-list';

const Routes_list = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={element.path} element={element.element} />
                </Routes>
            </BrowserRouter>
        </>  
    );
}

export default Routes_list;
