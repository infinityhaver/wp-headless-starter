import React from 'react'

const UtilityItem = ({ menuItem, wordPressUrl }) => {

	function UtilityMenuItem() {

		if(!menuItem.parentId && menuItem.childItems.nodes.length > 0) { 
			const childItems = menuItem.childItems.nodes
			const child = childItems.map((menuItem) => (
				<li>
					<a href={menuItem.path} target={menuItem.target} name={menuItem.label}>
						{menuItem.label}
					</a>
				</li>
			))
			
			return (
				<li>
					<a href={menuItem.path} target={menuItem.target} name={menuItem.label}>
						{menuItem.label}
					</a>
					<ul>
						{child}
					</ul>
				</li>
			)
		}

		if(!menuItem.parentId && menuItem.childItems.nodes.length === 0) { 
			const CSSClasses = menuItem.cssClasses
			return(
				<li className={CSSClasses}>
					<a href={menuItem.path} target={menuItem.target} name={menuItem.label}>
						{menuItem.label}
					</a>
				</li>
			)
		}
	}

	return (
    	<>
			{UtilityMenuItem()}
		</>
	)

}

export default UtilityItem