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
      name: 'blogIndexImage',
      title: 'Blog Index image',
      type: 'blogIndexImage'
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
      of: [
        { 
          type: "block", 
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Indented Text', value: 'indentedText'},
            {title: 'Standalone List', value: 'standaloneList'},
            {title: 'Nested Standalone List', value: 'nestedStandaloneList'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'H6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'},
          ]
        }, 
        { type: "figure" }
      ]
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
