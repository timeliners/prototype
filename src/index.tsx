import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router from './providers/router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
