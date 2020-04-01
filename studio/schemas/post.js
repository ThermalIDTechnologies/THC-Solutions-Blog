export default {
  type: "document",
  title: "Blog post",
  name: "post",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule post where you show them',
      type: 'datetime'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      title: "Introduction",
      name: "introduction",
      type: "string"
    },
    {
      title: "Body",
      name: "body",
      type: "array",
      of: [{ type: "block" }, { type: "figure" }]
    },
    {
      title: "Products",
      name: "products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }]
        }
      ]
    },
    {
      title: "CTA Section",
      name: "ctaSection",
      type: "ctaSection"
    },
    {
      title: "Quote Section",
      name: "quoteSection",
      type: "quoteSection"
    },
    {
      title: "Sources",
      name: "sources",
      type: "array",
      of: [
        {
          title: "Source",
          name: "source",
          type: "source"
        }
      ]
    }
  ]
};
