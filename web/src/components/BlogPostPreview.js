import React from 'react'

const BlogPostPreview = ({nodes}) => {
  return (
    <div>
      <h2>{nodes.title}</h2>
    </div>
  )
}

export default BlogPostPreview