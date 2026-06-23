import { Studio } from './Studio'

// Ensure that this route is statically generated
export const dynamic = 'force-static'

// Generate static params for the studio root and common sub-paths
export function generateStaticParams() {
  return [
    { index: [''] },
  ]
}

export default function StudioPage() {
  return <Studio />
}
