import React from 'react';
import ReactDOM from 'react-dom/client';
import { SimpleButton } from './SimpleButton';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SimpleButton />
  </React.StrictMode>
);
