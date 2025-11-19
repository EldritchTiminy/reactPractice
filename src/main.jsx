import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
//import './index.css';

let container = document.getElementById('root');
let root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);