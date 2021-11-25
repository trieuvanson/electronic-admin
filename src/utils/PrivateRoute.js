import {
    Route,
    Redirect
} from 'react-router-dom';

function PrivateRoute({ children, isAuthenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    isAuthenticated
                        ? (
                            children
                        ) : (
                            <Redirect
                                to={{
                                    pathname: '/admin',
                                    state: { from: location }
                                }}
                            />
                        ))
            }
        />
    );
}

export default PrivateRoute;