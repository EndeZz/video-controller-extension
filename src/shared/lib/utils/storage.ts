export const saveToStorage = (key: string, value: string): Promise<unknown> => {
  return new Promise((resolve, _) => {
    const dict: Record<string, unknown> = {}
    dict[key] = value
    chrome.storage.sync.set(dict, () => {
      resolve(value)
    })
  })
}

export const getFromStorage = (key: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, (data) => {
      if (data) {
        resolve(data)
      } else {
        reject()
      }
    })
  })
}
