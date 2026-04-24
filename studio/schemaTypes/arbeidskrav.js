export default {
  name: 'arbeidskrav',
  title: 'Arbeidskrav',
  type: 'document',
  fields: [
    {
      name: 'nummer',
      title: 'Nummer',
      type: 'number',
    },
    {
      name: 'tittel',
      title: 'Tittel',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'tittel',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .slice(0, 96),
      },
    },
    {
      name: 'beskrivelse',
      title: 'Beskrivelse',
      type: 'text',
      rows: 3,
    },
  ],

  orderings: [
    {
      title: 'Nummer (stigende)',
      name: 'nummerAsc',
      by: [{ field: 'nummer', direction: 'asc' }],
    },
  ],

  preview: {
    select: { title: 'tittel', subtitle: 'nummer' },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `Arbeidskrav ${subtitle}`,
      }
    },
  },
}
