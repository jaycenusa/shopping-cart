// routing configuration using react-router-dom
import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const routes =[
    {
        path:"/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/:page',
        element: <App />
    }
]

export default routes;