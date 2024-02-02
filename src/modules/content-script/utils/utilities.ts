const preventScroll = (event: WheelEvent) => {
  event.preventDefault()
  event.stopPropagation()

  return false
}

const updateButtonText = (button: HTMLButtonElement, playbackRate: number) => {
  button.innerHTML = playbackRate.toFixed(2)
}

export const changeVideoSpeed = (
  event: WheelEvent,
  button: HTMLButtonElement,
  video: HTMLVideoElement,
) => {
  const scrollDirection = Math.sign(event.deltaY)
  video.playbackRate += scrollDirection < 0 ? 0.1 : -0.1

  updateButtonText(button, video.playbackRate)
  preventScroll(event)
}
