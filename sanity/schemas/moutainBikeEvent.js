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
        title: 'Date',
        name: 'releaseDate',
        type: 'date',
        options: {
          dateFormat: 'MM-DD-YYYY',
          calendarTodayLabel: 'Today'
        }
      },
      {
        name: 'time',
        title: 'Event Time',
        type: 'string',
      },
      {
        name: 'location',
        title: 'Event Location',
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
