import React from 'react'
import UtilityNav from '../navs/UtilityNav'
import PrimaryNav from '../navs/PrimaryNav'
import './Header.scss'

const Header = () => {
	return (
		<header id="masthead" className="site-header">
			<UtilityNav />
			<PrimaryNav />
		</header>
	)
}

export default Header