import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'offer',
  title: 'Offer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'discount',
      title: 'Discount Label',
      type: 'string',
      description: 'Example: 20% OFF, Free Nail Spa, Rs. 2,500 Saver',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'validUntil',
      title: 'Valid Until',
      type: 'string',
      description: 'Use friendly text such as July 31, 2026 or Ongoing Promo.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'isActive',
      title: 'Show on Website',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'discount',
    },
  },
})
