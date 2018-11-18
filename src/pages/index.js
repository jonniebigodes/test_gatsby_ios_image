import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <div>
      <Link to="/page-2/">Go to gallery without graphql</Link>
    </div>
    <div>
      <Link to="/page-3/">Go to gallery with graphql</Link>
    </div>
    
  </Layout>
)

export default IndexPage
