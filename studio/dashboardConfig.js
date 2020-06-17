export default {
  widgets: [
    {
      name: 'sanity-tutorials'
    },
    {
      name: 'project-info'
    },
    {
      name: 'project-users'
    },
    {
      name: 'deploy-vercel'
    },
    {
      name: 'import-insta-links'
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'insta.thclabelsolutions.com',
            apiId: '224dfea1-1977-434b-b6ab-c3c48120c990',
            buildHookId: '5ee7b33f1d0fd56810dd2038',
            name: 'thc-link-in-bio',
          },
          {
            title: 'regulations.thclabelsolutions.com',
            apiId: '6059a409-8639-41ef-8ddf-9834b745b0ee',
            buildHookId: '5eea59bdeaeda901f9a8b4ec',
            name: 'thc-us-state-policy-site',
          },
        ]
      }
    },
  ]
}