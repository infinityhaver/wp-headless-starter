import React from 'react'


const PrimaryItem = ({ menuItem, wordPressUrl }) => {

	function MenuItem() {

		if(!menuItem.parentId && menuItem.childItems.nodes.length > 0) { 
			const childItems = menuItem.childItems.nodes
			const child = childItems.map((menuItem) => (
				<li>
					<a href={menuItem.path} target={menuItem.target}>
						{menuItem.label}
					</a>
				</li>
			))
			
			return (
				<li>
					<a href={menuItem.path} target={menuItem.target}>
						{menuItem.label}
					</a>
					<ul>
						{child}
					</ul>
				</li>
			)
		}

		if(!menuItem.parentId && menuItem.childItems.nodes.length === 0) { 
			
			return(
				<li>
					<a href={menuItem.path} target={menuItem.target}>
						{menuItem.label}
					</a>
				</li>
			)
		}
	}

	return (
    	<>
			{MenuItem()}
		</>
	)

}

export default PrimaryItem