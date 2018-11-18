import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ImageGalleryGraph from '../components/ImageGalleryGraph'

const ThirdPage = () => (
  <Layout>
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <div>
      <ImageGalleryGraph />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
