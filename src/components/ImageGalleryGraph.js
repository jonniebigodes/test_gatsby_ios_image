import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './ImageGallery.css'
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */
const ImageGalleryGraph=()=>(
  <StaticQuery
    query={graphql`
      query {
        ImageOne: file(relativePath: { eq: "birdcage.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 551,quality:90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ImageTwo: file(relativePath: {eq:"boat.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 799, maxHeight: 552,quality:90){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ImageThree: file(relativePath: {eq:"cyclists.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 797, maxHeight: 550,quality:90){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ImageFour: file(relativePath: {eq:"great_dane.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 750, maxHeight: 437,quality:90){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ImageFive: file(relativePath: {eq:"great_gatsby.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 800, maxHeight: 547,quality:90){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ImageSix: file(relativePath: {eq:"greedo.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1024, maxHeight: 537,quality:90){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ImageSeven: file(relativePath: {eq:"kcgc.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 600, maxHeight: 685,quality:90){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ImageEight: file(relativePath: {eq:"sandy-boots.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 800, maxHeight: 550){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ImageNine: file(relativePath: {eq:"tesla-cat.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 907, maxHeight: 510,quality:90){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ImageTen: file(relativePath: {eq:"tree.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 800, maxHeight: 550,quality:90){
                    ...GatsbyImageSharpFluid
                }
            }
        }
      }
    `}
    render={data => <div>
        <Img fluid={data.ImageOne.childImageSharp.fluid} />
        <Img fluid={data.ImageTwo.childImageSharp.fluid} />
        <Img fluid={data.ImageThree.childImageSharp.fluid} />
        <Img fluid={data.ImageFour.childImageSharp.fluid} />
        <Img fluid={data.ImageFive.childImageSharp.fluid} />
        <Img fluid={data.ImageSix.childImageSharp.fluid} />
        <Img fluid={data.ImageSeven.childImageSharp.fluid} />
        <Img fluid={data.ImageEight.childImageSharp.fluid} />
        <Img fluid={data.ImageNine.childImageSharp.fluid} />
        <Img fluid={data.ImageTen.childImageSharp.fluid} />
    </div>
    }
  />
)
export default ImageGalleryGraph