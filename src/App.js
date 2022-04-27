import { BrowserRouter, Link } from 'react-router-dom';
import { Pages } from "./pages/Pages";
import { Search, Category } from "./components";
import { GiKnifeFork } from 'react-icons/gi';

function App() {
	return (
		<BrowserRouter>
			<div className='mt-10'>
				<Link to='/' className='flex'>
					<GiKnifeFork className='text-2xl mr-3'/>
					<p className='text-2xl text-bold tracking-widest'>RECIPE APP</p>
				</Link>
			</div>
			<Search />
			<Category />
			<Pages />
		</BrowserRouter>
	);
}

export default App;
