import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import Layout from '../../layouts'
import Image, { loadImages } from '../../components/util/Image'

const images = require.context('../../../images/2017-08-02', false, /\.(?:jpe?g|png)$/i)
const postsContext = require.context('.', false, /\.md$/)

const urlRegex = /^\W*(.*)\.md$/g

const posts = postsContext.keys().map(path => (
  {
    ...postsContext(path),
    url: `posts/${urlRegex.exec(path)[1]}`
  }
))

const requireImage = require.context('../../../images', true, /\.(?:jpe?g|png)$/i)

console.log(requireImage.keys())

const resolveImage = uri => {
  return requireImage(uri.replace('../../../images', '.')).src
}

posts.forEach(({markdown, url, heroImages, ...layoutProps}) => {
  heroImages = heroImages.map((path, key) => (
    <Image className='c-hero__image' {...require(`../../../images/${path}`)} key={key} />
  ))
  module.exports[url] = (
    <Layout {...layoutProps} heroImages={heroImages}>
      <ReactMarkdown source={markdown} transformImageUri={resolveImage} />
    </Layout>
  )
})

export default class Posts extends Component {
  render () {
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {
            posts.map((post, key) => (
              <li key={key}>
                <a href={`${post.url}.html`}>{post.title}</a>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

Posts.layoutProps = {
  layout: Layout,
  title: 'Posts',
  heroImages: loadImages(images)
}
