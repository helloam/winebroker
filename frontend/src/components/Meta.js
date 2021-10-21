import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To WineBroker',
  description: 'Thoughtfully curated wines from the Sierra Foothills of California',
  keywords: 'wine, red wine, white wine, California wine, Sierra Foothills',
}

export default Meta