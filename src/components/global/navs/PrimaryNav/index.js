import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PrimaryItem from './PrimaryItem'
import './PrimaryNav.scss'


/**
 * Define MenuItem fragment and get all primary menu items.
 */
const MENU_QUERY = graphql`

	query GETMAINMENU {
		wpMenu(locations: {eq: PRIMARY}) {
			menuItems {
				nodes {
					path
					label
					target
					id
					parentId
					childItems {
						nodes {
							path
							label
							target
							id
							parentId
							childItems {
								nodes {
									path
									label
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

const PrimaryNav = () => {
  return (
	<StaticQuery
		query={MENU_QUERY}
		render={(data) => {
			if (data.wpMenu.menuItems) {

				const menuItems       = data.wpMenu.menuItems.nodes
				const wordPressUrl    = data.wp.generalSettings.url

				return (
					<div className="primary-nav-wrap">
						<div className="section-wrap">
							<div className="inner">
								<nav className="primary-nav">
									<ul className="primary-menu sm sm-simple">
										{
											menuItems &&
											menuItems.map((menuItem) => (
												<PrimaryItem key={menuItem.id} menuItem={menuItem} wordPressUrl={wordPressUrl}/>
											))
										}
									</ul>
								</nav>
							</div>
						</div>
					</div>
				)
			}
			return null
		}}
	/>
  )
}

export default PrimaryNav