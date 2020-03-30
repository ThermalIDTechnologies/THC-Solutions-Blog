export default {
  title: "State Cannabis Info",
  name: "stateCannabisInfo",
  type: "document",
  fields: [
    {
      title: "State",
      name: "state",
      description: "Full state name.",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Id",
      name: "id",
      description: "State abbreviation ex: Ca for California.",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Recreational Status",
      name: "recreationalStatus",
      description: "Yes or No.",
      type: "string",
      options: {
        list: [
          {title: 'Yes', value: 'Yes'},
          {title: 'No', value: 'No'},
        ], // <-- predefined values
        layout: 'dropdown' // <-- defaults to 'dropdown'
      },
      validation: Rule => Rule.required()
    },
    {
      title: "Medical Status",
      name: "medicalStatus",
      description: "Yes or No",
      type: "string",
      options: {
        list: [
          {title: 'Yes', value: 'Yes'},
          {title: 'No', value: 'No'},
        ], // <-- predefined values
        layout: 'dropdown' // <-- defaults to 'dropdown'
      },
      validation: Rule => Rule.required()
    },
    {
      title: "CBD Status",
      name: "cbdStatus",
      description: "Yes or No",
      type: "string",
      options: {
        list: [
          {title: 'Yes', value: 'Yes'},
          {title: 'No', value: 'No'},
        ], // <-- predefined values
        layout: 'dropdown' // <-- defaults to 'dropdown'
      },
      validation: Rule => Rule.required()
    },
    {
      title: "Color",
      name: "color",
      description: "Colors correspond to Cannabis state legal status.",
      type: "string",
      options: {
        list: [
          {title: 'Medical', value: '#97d700'},
          {title: 'Recreational', value: '#4a7729'},
          {title: 'CBD', value: '#fcd299'},
          {title: 'None', value: '#D3D3D3'},
        ], // <-- predefined values
        layout: 'dropdown' // <-- defaults to 'dropdown'
      },
      validation: Rule => Rule.required()
    },

  ]
}