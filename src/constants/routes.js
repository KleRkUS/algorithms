import Home from 'pages/Home';
import Algorithms from 'pages/Algorithms';
import { Route } from 'react-router-dom';
import Sorts from 'pages/Sorts';

export const routes = [
    {
        key: 'Home',
        path: '/',
        element: <Home />,
    },
    {
        key: "Algorithms",
        path: '/algorithms',
        element: <Algorithms />,
        children: (
            <Route path="sorts/:id" element={<Sorts />} />
        )
    }
];
