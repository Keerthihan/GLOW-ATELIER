import { client } from './client'

type SanityFetchArgs = {
  query: string
  params?: Record<string, unknown>
}

export async function sanityFetch<T>({query, params = {}}: SanityFetchArgs) {
  const data = await client.fetch<T>(query, params, {
    cache: 'no-store',
  })

  return {data}
}

export function SanityLive() {
  return null
}
