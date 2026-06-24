import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'package',
  title: 'Package',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Complete Wellness Ritual',
    }),
    defineField({
      name: 'includedServices',
      title: 'Included Services',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'originalPrice',
      title: 'Original Price',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'discountPrice',
      title: 'Discount Price',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Most Popular',
      type: 'boolean',
      initialValue: false,
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
      subtitle: 'discountPrice',
    },
  },
})
