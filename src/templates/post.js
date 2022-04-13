import React from 'react'
import { graphql } from 'gatsby'
import { combineFields } from '../utils/combine-fields'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'

const NewsTemplate = pageProps => {
	const data = combineFields(pageProps.data.wpPost, 'post')

	return (
		<>
			<Header />
			<Footer />
		</>
	)
}

export default NewsTemplate

export const query = graphql`
	query PostQuery($id: String!) {
		wpPost(id: { eq: $id }) {
			title
			date
		}
	}
`
