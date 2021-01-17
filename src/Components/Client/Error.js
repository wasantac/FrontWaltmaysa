import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Error = () => {
    return (
        <div>
            <Header/>
            <h1 className="my-5 py-5">No se encontró la página que buscas :(</h1>
            <Footer/>
        </div>
    );
}

export default Error;
