import { Outlet } from 'react-router-dom';
import PrimaryNav from './PrimaryNav';

const Navigation = () => {
	return (
		<>
			<header>
				<PrimaryNav />
			</header>
			<Outlet></Outlet>
		</>
	);
};

export default Navigation;
