import { changeVideoSpeed } from './utilities'

export const onMouseEnterEvent = (
  buttonElement: HTMLButtonElement,
  videoElement: HTMLVideoElement,
) => {
  const handleWheel = (event: WheelEvent) => changeVideoSpeed(event, buttonElement, videoElement)

  buttonElement.addEventListener('mouseenter', () => {
    buttonElement.addEventListener('wheel', handleWheel)
  })
}

export const onMouseLeaveEvent = (
  buttonElement: HTMLButtonElement,
  videoElement: HTMLVideoElement,
) => {
  const handleWheel = (event: WheelEvent) => changeVideoSpeed(event, buttonElement, videoElement)

  buttonElement.addEventListener('mouseleave', () => {
    buttonElement.removeEventListener('wheel', handleWheel)
  })
}
