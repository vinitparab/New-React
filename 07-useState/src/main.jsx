import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FormHandling from './components/FormHandling.jsx'
import TwoWayBind from './components/TwoWayBind.jsx'

createRoot(document.getElementById('root')).render(
<TwoWayBind/>
)
