import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ImageGalleryNoGraph from '../components/ImageGalleryNoGraph'
const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <div>
      <ImageGalleryNoGraph />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
