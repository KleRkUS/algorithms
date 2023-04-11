import { Layout } from 'components';
import { routes } from 'constants';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Fallback } from 'pages/Fallback';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Suspense fallback={<Fallback />}>
                <Routes>
                    {routes.map(({ key, ...rest }) => (
                        <Route key={key} {...rest} />
                    ))}
                </Routes>
            </Suspense>
        </Layout>
    </BrowserRouter>
);

export default App;
