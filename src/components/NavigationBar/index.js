import React from 'react';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavigationBarElements';

const Navbar = () => {
return (
	<>
	<Nav>

		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/store' activeStyle>
			Store
		</NavLink>
		<NavLink to='/tutorials' activeStyle>
			Tutorials
		</NavLink>
		<NavLink to='/blog' activeStyle>
			Blog
		</NavLink>
		<NavLink to='/contact' activeStyle>
			Contact
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
