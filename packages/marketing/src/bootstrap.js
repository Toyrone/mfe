import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';


// Mount function to start app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}


// if in development and in isolation
// call mount immediately

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_devroot-marketing')

    if (devRoot) {
        mount(devRoot);
    }
}



// If we are running through container
// export mount function

export { mount };

