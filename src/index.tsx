import { render } from 'inferno';
import App from './components/app';
import './index.scss';

if (process.env.NODE_ENV !== 'production') {
    const dt = require('inferno-devtools');
    dt.initDevTools();
}

render(<App />, document.getElementById('entry'));
