const postsContext = require.context('../../../posts', false, /\.md$/)

const posts = postsContext.keys().map(path => {
  const urlRegex = /^\W*((\d{4}-\d{2}-\d{2}).*)\.md$/g
  const match = urlRegex.exec(path)
  const [, title, date] = match
  const url = `posts/${title}`
  return {
    ...postsContext(path),
    date: new Date(date),
    url
  }
})

export const getPosts = (max) => posts.slice(0, max)