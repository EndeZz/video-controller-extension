export const createShadowElement = () => {
  const root = document.createElement('div')
  const shadowRoot = root.attachShadow({ mode: 'open' })

  const cssUrl = chrome.runtime.getURL('src/modules/content-script/content-script.css')

  shadowRoot.innerHTML = `<link rel="stylesheet" href="${cssUrl}"></link>`

  return { root, shadowRoot }
}

export const createButtonElement = () => {
  const button = document.createElement('button')
  button.innerHTML = 'Скорость'

  return button
}
