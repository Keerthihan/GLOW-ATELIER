import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'beforeAfter',
  title: 'Before & After',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceCategory',
      title: 'Service Category',
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
      name: 'beforeImage',
      title: 'Before Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'beforeAlt',
      title: 'Before Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'afterAlt',
      title: 'After Alt Text',
      type: 'string',
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
      title: 'serviceCategory',
      subtitle: 'description',
      media: 'afterImage',
    },
  },
})
