export const ContentSTrimer = ((text) => {
  const maxLength = 230
  const isLongText = text.length > maxLength
  return isLongText ? text.substring(0, maxLength) + '...' : text
})
export const TitleSTrimer = ((text) => {
  const maxLength = 48
  const isLongText = text.length > maxLength
  return isLongText ? text.substring(0, maxLength) + '...' : text
})