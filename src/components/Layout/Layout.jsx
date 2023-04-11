import { routes } from 'constants';
import { PropTypes } from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import { Aside } from 'components';
import { Text } from 'components/Elements';
import styles from './Layout.module.css';

const {
    header,
    link,
    activeLink,
    content,
    contentInternal,
    heading,
} = styles;

const Layout = ({ children }) => {
    const match = useLocation();
    console.log(match);

    return(
        <>
            <header className={header}>
                {routes.map(({ key, path }) => (
                    <NavLink
                        to={path}
                        key={key}
                        className={({ isActive }) => `${link} ${isActive ? activeLink : ''}`}
                    >
                        {key}
                    </NavLink>
                ))}
            </header>

            <main className={content}>
                <Aside />
                <div className={contentInternal}>
                    {children}
                </div>
            </main>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export { Layout };