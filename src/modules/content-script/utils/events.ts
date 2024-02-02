import { changeVideoSpeed } from './utilities'

export const onMouseEnterEvent = (
  buttonElement: HTMLButtonElement,
  videoElement: HTMLVideoElement,
) => {
  buttonElement.addEventListener('mouseenter', () => {
    buttonElement.addEventListener('wheel', (event: WheelEvent) => {
      changeVideoSpeed(event, videoElement)
    })
  })
}

export const onMouseLeaveEvent = (
  buttonElement: HTMLButtonElement,
  videoElement: HTMLVideoElement,
) => {
  buttonElement.addEventListener('mouseleave', () => {
    buttonElement.removeEventListener('wheel', (event: WheelEvent) => {
      changeVideoSpeed(event, videoElement)
    })
  })
}
