import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './fx.css';
import { initMotion } from './lib/motion';

createRoot(document.getElementById('root')!).render(<App />);
initMotion();