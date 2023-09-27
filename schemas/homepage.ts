
export default {
  name: 'homepage',
  title: 'HomePage',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string'
            },
            {
              name: 'alt',
              title: 'Alt',
              type: 'text'
            }
          ]
        }
      ]
    },
  ],
};


