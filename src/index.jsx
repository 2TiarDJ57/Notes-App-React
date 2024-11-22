import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <Header/>
        <Body/>
    </>
);