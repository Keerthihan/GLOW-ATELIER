export const HOME_SECTIONS_QUERY = /* groq */ `{
  "gallery": *[_type == "gallery" && !(_id in path("drafts.**")) && isActive != false && defined(image.asset._ref)] | order(sortOrder asc, _createdAt desc) {
    _id,
    title,
    caption,
    alt,
    category,
    "imageUrl": image.asset->url
  },
  "postGallery": *[_type == "post" && !(_id in path("drafts.**")) && defined(gallery)][0].gallery[defined(image.asset._ref)] {
    "_id": _key,
    "title": caption,
    caption,
    "alt": coalesce(caption, "Glow Atelier gallery image"),
    "imageUrl": image.asset->url
  },
  "offers": *[_type == "offer" && !(_id in path("drafts.**")) && isActive != false] | order(sortOrder asc, _createdAt desc) {
    _id,
    title,
    description,
    discount,
    validUntil
  },
  "packages": *[_type == "package" && !(_id in path("drafts.**")) && isActive != false] | order(sortOrder asc, _createdAt desc) {
    _id,
    name,
    subtitle,
    includedServices,
    originalPrice,
    discountPrice,
    featured
  },
  "beforeAfter": *[_type == "beforeAfter" && !(_id in path("drafts.**")) && isActive != false] | order(sortOrder asc, _createdAt desc) {
    _id,
    serviceCategory,
    description,
    beforeAlt,
    afterAlt,
    "beforeImageUrl": beforeImage.asset->url,
    "afterImageUrl": afterImage.asset->url
  },
  "artists": *[_type == "artist" && !(_id in path("drafts.**")) && isActive != false] | order(sortOrder asc, name asc) {
    _id,
    name,
    "slug": slug.current,
    role,
    experience,
    skills,
    bio,
    instagram,
    "imageUrl": image.asset->url
  }
}`

export const GALLERY_PAGE_QUERY = /* groq */ `
  {
    "gallery": *[_type == "gallery" && !(_id in path("drafts.**")) && isActive != false && defined(image.asset._ref)] | order(sortOrder asc, _createdAt desc) {
      _id,
      title,
      caption,
      alt,
      category,
      "imageUrl": image.asset->url
    },
    "postGallery": *[_type == "post" && !(_id in path("drafts.**")) && defined(gallery)][0].gallery[defined(image.asset._ref)] {
      "_id": _key,
      "title": caption,
      caption,
      "alt": coalesce(caption, "Glow Atelier gallery image"),
      "imageUrl": image.asset->url
    }
  }
`

export const ARTISTS_QUERY = /* groq */ `
  *[_type == "artist" && !(_id in path("drafts.**")) && isActive != false] | order(sortOrder asc, name asc) {
    _id,
    name,
    "slug": slug.current,
    role,
    experience,
    skills,
    bio,
    instagram,
    "imageUrl": image.asset->url
  }
`
