import { Navigate, Route, Routes } from 'react-router-dom';
import ExternalLink from './components/ExternalLink';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ChatApp from './pages/ChatApp';
import Home from './pages/Home';
import Projects from './pages/Projects';
import TicTacToe from './pages/TicTacToe';
import Wc3Risk from './pages/Wc3Risk';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route path='/' element={<Navigate to='home' />} />
					<Route path='/home' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/chatapp' element={<ChatApp />} />
					<Route path='/tictactoe' element={<TicTacToe />} />
					<Route path='/wc3risk' element={<Wc3Risk />} />
					<Route path='/github' element={<ExternalLink />} />
				</Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
