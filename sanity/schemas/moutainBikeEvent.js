export default {
    name: 'mountain-bike-events',
    title: 'Mountain Bike Fellowship Events',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'dateLocation',
        title: 'Event Date & Location',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Event Description',
        type: 'text',
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  }
