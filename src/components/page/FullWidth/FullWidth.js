import React from 'react'
import './FullWidth.scss'

const FullWidth = ({ width, textColor, textAlign, headingTag, heading, content, paddingTop, paddingBottom }) => {

    function Heading() {
		const Heading = `<${headingTag} class="acf-full-width-heading acf-${textAlign} acf-${textColor}">${heading}</${headingTag}>`
		if(heading) {
			return(
				<div className="heading-wrap" dangerouslySetInnerHTML={{__html: Heading}} />
			)
		}
	}

	return (
		<div className="section-wrap" style={{ paddingTop: `${paddingTop}px`, paddingBottom: `${paddingBottom}px` }}>
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