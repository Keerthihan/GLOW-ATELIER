import { type SchemaTypeDefinition } from 'sanity'

import post from '../schemas/post'
import blockContent from '../schemas/blockContent'
import galleryImage from '../schemas/galleryImage'
import gallery from '../schemas/gallery'
import offer from '../schemas/offer'
import packageType from '../schemas/package'
import beforeAfter from '../schemas/beforeAfter'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    blockContent,
    galleryImage,
    gallery,
    offer,
    packageType,
    beforeAfter,
  ],
}
