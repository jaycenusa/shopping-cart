import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
// import App from './App.jsx'
import routes from './routes.jsx';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
