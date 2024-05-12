import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
]);
