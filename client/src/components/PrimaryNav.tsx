import { Container, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const PrimaryNav = () => {
	return (
		<Navbar bg='dark' variant='dark' sticky='top'>
			<LinkContainer to='/' className='py-0' style={{ margin: '0px', paddingLeft: '.5rem' }}>
				<Navbar.Brand>chittenden.dev</Navbar.Brand>
			</LinkContainer>

			<Container fluid className='d-flex justify-content-end'>
				<Nav className=''>
					<NavDropdown title='Projects' id='basic-nav-dropdown'>
						<NavDropdown.Item href='/chatapp'>Chat App</NavDropdown.Item>
						<NavDropdown.Item href='/tictactoe'>Tic Tac Toe</NavDropdown.Item>
						<NavDropdown.Item href='/wc3risk'>Warcraft 3 Risk</NavDropdown.Item>
					</NavDropdown>
					<LinkContainer to='/github'>
						<Nav.Link>Github</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/login'>
						<Nav.Link>Login</Nav.Link>
					</LinkContainer>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default PrimaryNav;
