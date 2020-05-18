export default {
  name: "instaLink",
  type: "document",
  fields: [
    { name: "ogImage", type: "string" },
    { name: "thumbnail", type: "string" },
    { name: "postUrl", type: "string" },
    { name: "caption", type: "string" },
    { name: "timestamp", type: "datetime" },
    {
      title: "Product Links",
      name: "productLinks",
      type: "array",
      of: [
        {
          title: "Product Link",
          name: "productLink",
          type: "productLink",
        },
      ],
    },
  ],
  orderings: [
    {
      title: 'Post Date, New',
      name: 'postDateDesc',
      by: [
        {field: 'timestamp', direction: 'desc'}
      ]
    },
    {
      title: 'Post Date, Old',
      name: 'postDateAsc',
      by: [
        {field: 'timestamp', direction: 'asc'}
      ]
    },
  ]
};
