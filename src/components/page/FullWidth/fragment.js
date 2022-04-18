module.exports = () => {
	return `
        width
		textColor
		textAlign
		headingTag
		heading
		content
		backgroundImage {
			altText
			caption
			title
			localFile {
				childImageSharp {
					gatsbyImageData(
						placeholder: NONE
						layout: FULL_WIDTH
						quality: 100
						webpOptions: {quality: 100}
						formats: WEBP
					)
				}
			}
		}
		overlay
		overlayOpacity
		xPosition
		yPosition
		paddingTop
		paddingBottom
	`
}