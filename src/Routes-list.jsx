import React from 'react';
import App from './js/App';
import { useRoutes } from "react-router-dom";

function Routes_list() {
    let element = useRoutes([
        { path: "/Home", element: <App /> },
      /*  { path: "dashboard", element: <Dashboard /> },
        {
            path: "invoices",
            element: <Invoices />,
            // Nested routes use a children property, which is also
            // the same as <Route>
            children: [
                { path: ":id", element: <Invoice /> },
                { path: "sent", element: <SentInvoices /> }
            ]
        },*/
        // Not found routes work as you'd expect
      //  { path: "*", element: <NotFound /> }
    ]);

    // The returned element will render the entire element
    // hierarchy with all the appropriate context it needs
    return element;
}

export default Routes_list;