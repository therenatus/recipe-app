import { BrowserRouter } from 'react-router-dom';
import { Pages } from "./pages/Pages";
import { Search, Category } from "./components";

function App() {
	return (
		<BrowserRouter>
			<Search />
			<Category />
			<Pages />
		</BrowserRouter>
	);
}

export default App;
