import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";

const appRouter = createBrowserRouter([
	{
		path: "/namaste-youtube/",
		element: <Body />,
		children: [
			{
				path: "/namaste-youtube/",
				element: <MainContainer />,
			},
			{
				path: "/namaste-youtube/watch",
				element: <WatchPage />,
			},
			{
				path: "/namaste-youtube/results",
				element: <SearchResults />,
			},
		],
	},
]);
function App() {
  return (
		<Provider store={store}>
			<div>
				<RouterProvider router={appRouter} />
			</div>
		</Provider>
	);
}

export default App;
