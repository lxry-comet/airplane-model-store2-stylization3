import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'; //! Emotion Theme
import { theme } from '@/constants'; //! Emotion Theme

import App from './components/App/App.jsx'
import './index.css'



createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter basename='/airplane-model-store2-stylization3'>
			<ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
		</BrowserRouter>
	</StrictMode>
)
