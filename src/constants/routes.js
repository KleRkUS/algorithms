import { Route } from 'react-router-dom';

import Algorithms from 'pages/Algorithms';
import Home from 'pages/Home';
import Sorts from 'pages/Sorts';

export const routes = [
    {
        key: 'Home',
        path: '/',
        element: <Home />,
    },
    {
        key: 'Algorithms',
        path: '/algorithms',
        element: <Algorithms />,
        children: <Route path="sorts/:id" element={<Sorts />} />,
    },
];
