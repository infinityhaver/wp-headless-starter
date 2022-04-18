import React from 'react'
import './FullWidth.scss'

const FullWidth = ({ width, textColor, textAlign, headingTag, heading, content, backgroundImage, overlay, overlayOpacity, xPosition, yPosition, paddingTop, paddingBottom }) => {

	function BackgroundImage() {
		if(backgroundImage) {
			const BackgroundImage = backgroundImage.localFile.childImageSharp.gatsbyImageData.images.fallback.src
			return (
				BackgroundImage
			)
		} else {}
	}

	function BackgroundPosition() {
		if(backgroundImage) {
			const BackgroundPosition = `${xPosition} ${yPosition}`
			return (
				BackgroundPosition
			)
		} else {}
	}

	function Overlay() {
		if(overlay) {
			const hex2rgba = (hex, alpha = 1) => {
				const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
				function Alpha() {
					if(alpha === 100) {
						return (
							'1'
						)
					} else if(alpha === 0) {
						return (
							'0'
						)
					} else {
						const Alpha = `.${alpha}`
						return (
							Alpha
						)
					}
				}
				return `rgba(${r},${g},${b},${Alpha()})`;
			};
			const Overlay = hex2rgba(overlay, overlayOpacity)
		} else {}
	}

	function CSSBackground() {
		if(backgroundImage && overlay) {
			return(
				`linear-gradient(${Overlay}, ${Overlay}), url(${BackgroundImage()})`
			)
		} else if(!backgroundImage && overlay) {
			return(
				`linear-gradient(${Overlay}, ${Overlay})`
			)
		} else if(backgroundImage && !overlay) {
			return(
				`url(${BackgroundImage()})`
			)
		} else {}
	}

	function Heading() {
		const Heading = `<${headingTag} class="acf-full-width-heading acf-${textAlign} acf-${textColor}">${heading}</${headingTag}>`
		if(heading) {
			return(
				<div className="heading-wrap" dangerouslySetInnerHTML={{__html: Heading}} />
			)
		}
	}

	return (
		<div className="section-wrap acf-full-width-wrap" style={{ background: `${CSSBackground()}`, paddingTop: `${paddingTop}px`, paddingBottom: `${paddingBottom}px`, backgroundPosition: `${BackgroundPosition()}` }}>
			<div className="inner">
				<div className={`acf-full-width-text acf-${width}`}>
					{Heading()}
					<div className={`acf-full-width-content acf-${textAlign} acf-${textColor}`} dangerouslySetInnerHTML={{__html: content}} />
				</div>
			</div>
		</div>
	)
}

export default FullWidth