export const validEmail = (value) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return !emailPattern.test(value.trim())
}
