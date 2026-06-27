import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Specialization',
      type: 'string',
      description: 'e.g., Senior Stylist, Makeup Artist, Nail Artist',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Artist Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'string',
      description: 'e.g., 5 Years, 10 Years',
    }),
    defineField({
      name: 'skills',
      title: 'Skills / Specialties',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List key skills or specialties (e.g., Balayage, Airbrushing)',
    }),
    defineField({
      name: 'bio',
      title: 'Biography / Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Link',
      type: 'url',
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
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
