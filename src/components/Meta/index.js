import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

const Meta = ({ site, title, description, path }) => {
  const siteTitle = get(site, 'title')
  title = title ? `${title} | ${siteTitle}` : siteTitle
  description = description ? description : get(site, 'description')
  path = `${get(site, 'url')}${path}`
  return (
    <Helmet
      title={title}
      meta={[
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: description,
        },
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:url',
          content: path,
        },
        {
          property: 'og:image',
          content: `${get(site, 'url')}/img/icon.png`,
        },
      ]}
    />
  )
}
export default Meta
