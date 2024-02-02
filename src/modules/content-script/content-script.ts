import { createButtonElement, createShadowElement } from './utils/create-elements'
import { onMouseEnterEvent, onMouseLeaveEvent } from './utils/events'

const init = () => {
  const videoElements = document.querySelectorAll('video')

  videoElements.forEach((videoElement: HTMLVideoElement) => {
    const shadowElement = createShadowElement()
    const buttonElement = createButtonElement()

    shadowElement.shadowRoot.append(buttonElement)
    videoElement.parentNode?.prepend(shadowElement.root)

    onMouseEnterEvent(buttonElement, videoElement)
    onMouseLeaveEvent(buttonElement, videoElement)
  })
}

init()
