import React from "react"

import Layout from "../components/FormLayout"
import SEO from "../components/seo"
import MondayForm from "./../components/MondayForm"

const CustomSolutionsForm = () => {
  return (
    <Layout>
      <SEO title="Custom Solutions Form" description="Fill out the form to receive information about our A-Z custom solutions for your business."/>
      <MondayForm />
    </Layout>
  )
}

export default CustomSolutionsForm