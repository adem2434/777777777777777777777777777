import React from 'react'
    import ReactDOM from 'react-dom/client'
    import AppWrapper from './App'
    import './index.css'

    try {
      ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          <AppWrapper />
        </React.StrictMode>
      )
    } catch (error) {
      console.error("Error rendering the app:", error);
    }
