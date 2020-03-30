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
