export default {
    name: 'Teachings',
    title: 'Teaching',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'audio',
        title: 'Audio Link',
        type: 'string',
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  }
