export default {
    name: 'media',
    title: 'Media',
    type: 'image',
    options: { hotspot: true },
    fields: [
      { name: 'alt', title: 'Alt text', type: 'string', validation: Rule => Rule.required() }
    ]
  }
  