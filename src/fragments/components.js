
    import { graphql } from 'gatsby'
  
    export const componentFragments = graphql`
       
 
      fragment Page_Accordions on WpPage_Pagecomponents_PageComponents_Accordions {
        
        accordionItem {
            title
            content
        }
    
      }
     
 
      fragment Page_FullWidth on WpPage_Pagecomponents_PageComponents_FullWidth {
        
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
	
      }
     
 
      fragment Page_SiteSearch on WpPage_Pagecomponents_PageComponents_SiteSearch {
        
		ignoreMe
	
      }
     
 
      fragment Page_Space on WpPage_Pagecomponents_PageComponents_Space {
        
		fullWidth
		height
	
      }
    
    `
    