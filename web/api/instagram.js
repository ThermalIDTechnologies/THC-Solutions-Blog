require("isomorphic-fetch")

const url = `https://www.instagram.com/graphql/query/?query_hash=9dcf6e1a98bc7f6e92953d5a61027b98&variables={"id":"32897524027","first":6}`

const cache = {
  lastFetch: 0,
  posts: [],
}

async function getPosts() {
  // first see if we have a cache in 30 mins
  const timeSinceLastFetch = Date.now() - cache.lastFetch
  if (timeSinceLastFetch <= 1800000) {
    return cache.posts
  }
  const data = await fetch(url).then(res => res.json())
  const posts = slimUpPosts(data)
  cache.lastFetch = Date.now()
  cache.posts = posts
  return posts
}

function slimUpPosts(response) {
  return response.data.user.edge_owner_to_timeline_media.edges.map(edge => ({
    ogImage: edge.node.thumbnail_src,
    thumbnail: edge.node.thumbnail_resources[2].src,
    url: `https://instagram.com/p/${edge.node.shortcode}`,
    caption: edge.node.edge_media_to_caption.edges[0].node.text,
    id: edge.node.id,
  }))
}

module.exports = async (req, res) => {
  const posts = await getPosts()
  res.json({
    body: posts,
  })
}

// https://www.instagram.com/graphql/query/?query_hash=ff260833edf142911047af6024eb634a&variables={"id":"32897524027","first":4}

// exports.handler = async (event, context) => ({
//   statusCode: 200,
//   body: "test",
// });
