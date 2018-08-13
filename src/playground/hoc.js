// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abtract state

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Info</h1>
            <p>This info is: {props.info}</p>
        </div>
    );
};

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Pleasse don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please login to view the information</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info={'These are the details'}/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info={'These are the details'}/>, document.getElementById('app'));