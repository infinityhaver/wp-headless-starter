import React from 'react'
import UtilityNav from '../Navs/UtilityNav'
import PrimaryNav from '../Navs/PrimaryNav'
import './Header.scss'

const Header = () => {
	return (
		<>
			<header id="masthead" className="site-header">
				<UtilityNav />
				<PrimaryNav />
			</header>
		</>
	)
}

export default Header