import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React, { StrictMode } from 'react';

const areactElement = React.createElement(
    'a',
    {href:'https://google.com',target:"_blank"},
    "click to visit google"
)
createRoot(document.getElementById('root')).render(
    areactElement
)
