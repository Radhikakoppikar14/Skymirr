import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './fx.css';
import './premium.css';
import './premium-home.css';
import './live.css';
import { initMotion } from './lib/motion';
import { initPremium } from './lib/premium';
import { initLive } from './lib/live';

createRoot(document.getElementById('root')!).render(<App />);
initMotion();
initPremium();
initLive();