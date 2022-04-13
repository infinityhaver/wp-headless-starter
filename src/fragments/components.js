
    import { graphql } from 'gatsby'
  
    export const componentFragments = graphql`
       
 
      fragment Page_FullWidth on WpPage_Pagecomponents_PageComponents_FullWidth {
        
        width
		textColor
		textAlign
		headingTag
		heading
		content
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
    