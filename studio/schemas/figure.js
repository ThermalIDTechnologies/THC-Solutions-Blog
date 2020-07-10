export default {
  name: 'figure',
  title: 'Figure',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative text (for screen readers)',
      type: 'string',
      options: {
        isHighlighted: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: "imageWidth",
      title: "Image Width",
      description: "Set maximum widths (using pixels) of images",
      type: "string",
      options: {
        isHighlighted: true,
        list: [
          { title: "Xtra Small (376px Width)", value: "376" },
          { title: "Small (564px Width)", value: "564" },
          { title: "Medium (846px Width)", value: "846" },
          { title: "Large (1072px Width)", value: "1072" },
        ], // <-- predefined values
        layout: "dropdown", // <-- defaults to 'dropdown'
      },
      validation: (Rule) => Rule.required(),
    },
  ]
}