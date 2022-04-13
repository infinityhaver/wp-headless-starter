// See .cache/page-templates after running dev/build
// to understand how this file ends up looking

import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'

// ### COMPONENT IMPORTS ### DO NOT MODIFY OR MOVE THIS COMMENT ###

const PageTemplate = pageProps => {
	let components
	// ### COMPONENTS VARIABLE ### DO NOT MODIFY OR MOVE THIS COMMENT ###
	components = components.map(component => {
		return {
			name: component.__typename.split('_').pop(),
			data: component,
		}
	})

	const defaultTitle      = pageProps.data.wpPage.title
	const metaTitle         = pageProps.data.wpPage.pageComponents.metaTitle
	const metaDescription   = pageProps.data.wpPage.pageComponents.metaDescription
	const keyWords          = pageProps.data.wpPage.pageComponents.keyWords

	function metadescription() {
		if(metaDescription) { 
			return(
				<meta name="description" content={metaDescription}></meta>
			)
		}
	}

	function keywords() {
		if(keyWords) { 
			return(
				<meta name="keywords" content={keyWords}></meta>
			)
		}
	}

	return (
		<>
			<Helmet>
				<title>{ metaTitle || defaultTitle }</title>
				{metadescription()}
				{keywords()}
			</Helmet>
			<Header />
			{components.map((component, index) => {
				// ### COMPONENT RENDERING ### DO NOT MODIFY OR MOVE THIS COMMENT ###
				return <div>Error: The component {component.name} was not found</div>
			})}
			<Footer />
		</>
	)
}

export default PageTemplate

// ### PAGE QUERY ### DO NOT MODIFY OR MOVE THIS COMMENT ###
