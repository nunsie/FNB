export function format(text) {
  return parseFloat(
    text
      .replace(',', '')
      .replace('R ', '')
      .replace('eB ', '')
  )
}
