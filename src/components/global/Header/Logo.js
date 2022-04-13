import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function Logo() {

	const query = useStaticQuery(graphql`
		query siteSettingsQuery {
			wp {
				generalSettings {
					title
					description
				}
				themeOptions {
					themeOptions {
						logo {
							id
							sourceUrl
							altText
							localFile {
								childImageSharp {
									gatsbyImageData(
										placeholder: NONE,
										formats: WEBP,
										webpOptions: {quality: 100},
										layout: FULL_WIDTH
									)
								}
							}
						}
					}
				}
			}
		}
	`)

	const logo 		= getImage(query.wp.themeOptions.themeOptions.logo.localFile)
	const logoAlt 	= query.wp.themeOptions.themeOptions.logo.altText
	const title 	= query.wp.generalSettings.title

	return (
		<div className="logo">
			<a href="/" title={title}>
				<GatsbyImage image={logo} alt={logoAlt} layout="fullWidth" />
			</a>
		</div>
	)
}

export default Logo