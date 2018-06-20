import React from 'react';
import ReactDOM from 'react-dom';
import WindowManager from './base/WindowManager';
import './css/base.css';
import './css/app.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div className="app"> <WindowManager /> </div>, document.getElementById('root'));
registerServiceWorker();
