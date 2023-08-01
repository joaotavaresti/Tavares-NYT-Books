export const getLastSegmentOfURL = (url) => {
  // Split the URL by '/'
  const segments = url.split("/")

  // Filter out any empty segments (e.g., if the URL ends with a '/')
  const nonEmptySegments = segments.filter((segment) => segment !== "")

  // Extract the last segment
  const lastSegment = nonEmptySegments[nonEmptySegments.length - 1]

  return lastSegment
}
