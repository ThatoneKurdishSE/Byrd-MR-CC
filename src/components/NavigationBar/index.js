import React from 'react';
import {
Nav,
NavLink,
NavMenu,
} from './NavigationBarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu data-cy='navigationBar'>
		<NavLink to='/' activeStyle data-cy='home'>
			Home
		</NavLink>
		<NavLink to='/store' activeStyle data-cy='store'>
			Store
		</NavLink>
		<NavLink to='/tutorials' activeStyle data-cy='tutorial'>
			Tutorials
		</NavLink>
		<NavLink to='/blog' activeStyle data-cy='blog'>
			Blog
		</NavLink>
		<NavLink to='/contact' activeStyle data-cy='contact'>
			Contact
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
