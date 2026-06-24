import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
    },
    prepare({title, media}) {
      return {
        title: title || 'Gallery image',
        media,
      }
    },
  },
})
