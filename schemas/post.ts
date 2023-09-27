
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Web Design and Development', value: 'Web Design and Development' },
          { title: 'ECommerce', value: 'Ecommerce' },
          { title: 'Tips and Trends', value: 'Tips and Trends' },
          { title: 'Marketing', value: 'Marketing' },
          { title: 'Content Strategy', value: 'Content Strategy' },
          { title: 'Web Conversions', value: 'Web Conversions' },
          { title: 'Video', value: 'Video' },
          // Add more categories as needed
        ],
        layout: 'dropdown', // You can change the layout to 'radio' if you prefer radio buttons
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      }
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        }
      ]
    },
    {
      name: 'content',
      title: 'content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type: 'text'


            }
          ]
        }
      ],
    },
  ],
};


