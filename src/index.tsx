import { render } from 'inferno';
import { App } from './app';
import './index.scss';

if (process.env.NODE_ENV !== 'production') {
    const dt = require('inferno-devtools');
    dt.initDevTools();
    console.log('we are in dev');
}

export function getOne() {
    return 1;
}

render(<App />, document.getElementById('entry'));
