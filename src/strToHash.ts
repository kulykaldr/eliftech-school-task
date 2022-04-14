const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const strToHash = (str: string): number => {
  let hash: number = 0
  if (str.length === 0) {
    return hash
  }

  for (let i = 0; i < str.length; i++) {
    const chr: number = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + chr
    hash |= 0 // Convert to 32bit integer
  }
  hash += randomIntFromInterval(9999, 999999)
  return Math.abs(hash)
}

export default strToHash