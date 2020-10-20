export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8e808e2a39c5ba86d76f74',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-381dd6oj',
                  apiId: '0b45f34a-2d0c-4759-be8b-d2a7eacc1076'
                },
                {
                  buildHookId: '5f8e808e39f35cba58f26947',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pp1x494d',
                  apiId: '70316914-f137-458e-853e-a3e7b32f75d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rafaaro/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pp1x494d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
