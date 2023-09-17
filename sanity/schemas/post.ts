export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: "overview",
      type: 'string',
      title: 'Overview'
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Web Design and Development', value: 'web design and development' },
          { title: 'Tips and Trends', value: 'tips and trends' },
          { title: 'Ecommerce', value: 'ecommerce' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Mobile Apps', value: 'mobile apps' },
          { title: 'User Experience', value: 'user experience' },
        ],
        layout: 'radio'
      }
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            }
          ]
        }
      ]
    }
  ]
}
