export default {
    name: 'topic',
    title: 'Topic',
    type: 'document',
    fields: [
      { name: 'title', type: 'string', title: 'Tittel', validation: R => R.required() },
      { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 }, validation: R => R.required() },
      { name: 'date', type: 'datetime', title: 'Planlagt dato' },
      {
        name: 'level',
        type: 'string',
        title: 'Nivå',
        options: { list: ['Intro', 'Basic', 'Intermediate', 'Advanced'] }
      },
      { name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }] },
      { name: 'cover', type: 'media', title: 'Forsidebilde' },
      { name: 'excerpt', type: 'text', title: 'Ingress', rows: 3 },
      { name: 'body', type: 'array', title: 'Innhold', of: [{ type: 'block' }] },
      { name: 'instructors', type: 'array', of: [{ type: 'reference', to: [{ type: 'instructor' }] }], title: 'Instruktører' },
      {
        name: 'resources',
        title: 'Ressurser',
        type: 'array',
        of: [{ type: 'object', fields: [
          { name: 'title', type: 'string', title: 'Tittel' },
          { name: 'url', type: 'url', title: 'Lenke' }
        ]}]
      }
    ],
    preview: {
      select: { title: 'title', media: 'cover' }
    }
  }
  