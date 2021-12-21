export default {
    name: 'Teachings',
    title: 'Teachings',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
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
