import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Focus from '../components/focus';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Margin = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`

const IndexPage = () => (
  <Fragment> 
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  <Margin>
    <Focus />
  </Margin>
 
  </Fragment>
)

export default IndexPage
