export default {
    name: 'pastor',
    title: 'Pastors',
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
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'text',
      },
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }
