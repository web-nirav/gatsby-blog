import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const ThirdPage = () => (
  <Layout>
    <h1>Hi from the third page</h1>
    <Link to="/page-2">Go back to the Second page</Link>
  </Layout>
)

export default ThirdPage
