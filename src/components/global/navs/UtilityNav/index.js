import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import UtilityItem from './UtilityItem'
import './UtilityNav.scss'

/**
 * Define MenuItem fragment and get all utility menu items.
 */
const UTILITY_MENU_QUERY = graphql`

	query GETUTILITYMENU {
		wpMenu(locations: {eq: UTILITY}) {
			menuItems {
				nodes {
					path
					label
					cssClasses
					target
					id
					parentId
					childItems {
						nodes {
							path
							label
							cssClasses
							target
							id
							parentId
							childItems {
								nodes {
									path
									label
									cssClasses
									target
									id
									parentId
								}
							}
						}
					}
				}
			}
		}
		wp {
			generalSettings {
				title
				url
			}
		}
	}
`

const UtilityNav = () => {
  return (
	<StaticQuery
		query={UTILITY_MENU_QUERY}
		render={(data) => {
			if (data.wpMenu.menuItems) {

				const menuItems       = data.wpMenu.menuItems.nodes
				const wordPressUrl    = data.wp.generalSettings.url

				return (
					<div className="utility-nav-wrap">
						<nav className="utility-nav">
							<ul className="utility-menu">
								{
									menuItems &&
									menuItems.map((menuItem) => (
										<UtilityItem key={menuItem.id} menuItem={menuItem} wordPressUrl={wordPressUrl}/>
									))
								}
							</ul>
						</nav>
					</div>
				)
			}
			return null
		}}
	/>
  )
}

export default UtilityNav