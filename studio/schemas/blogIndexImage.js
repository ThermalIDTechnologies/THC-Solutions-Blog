export default {
  name: 'blogIndexImage',
  title: 'Blog index image',
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
        isHighlighted: true
      }
    }
  ]
}