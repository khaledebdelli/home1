const fetcher = async (url: string, options?: {}) => {
    const res = await fetch(url, options)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }

  export default fetcher;