export default {
  name: 'arbeidskrav',
  title: 'Arbeidskrav',
  type: 'document',
  fields: [
    {
      name: 'nummer',
      title: 'Nummer',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'tittel',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'beskrivelse',
      title: 'Beskrivelse',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
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
        title: title,
        subtitle: `Arbeidskrav ${subtitle}`,
      }
    },
  },
}