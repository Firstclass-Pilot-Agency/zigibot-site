import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PageMangerContext } from './Contexts/PageContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PageMangerContext>

        <App />
        </PageMangerContext>
    </React.StrictMode>
)
