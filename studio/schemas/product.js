export default {
  type: "document",
  title: "THC Product",
  name: "product",
  fields: [
    {
      type: "string",
      name: "title"
    },
    {
      title: "Product Image",
      type: "image",
      name: "productImage"
    },
    {
      title: "Product Info",
      name: "productInfo",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      title: "Button URL",
      type: "url",
      name: "buttonUrl"
    },
    {
      title: "Button Text",
      type: "string",
      name: "buttonText"
    },
    {
      title: "Choose background color",
      name: "bgColor",
      type: "color"
    }
  ]
};
