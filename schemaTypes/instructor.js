export default {
    name: 'instructor',
    title: 'Instructor',
    type: 'document',
    fields: [
      { name: 'name', type: 'string', title: 'Navn', validation: R => R.required() },
      { name: 'role', type: 'string', title: 'Rolle' },
      { name: 'avatar', type: 'media', title: 'Bilde' }
    ],
    preview: {
      select: { title: 'name', subtitle: 'role', media: 'avatar' }
    }
  }
  