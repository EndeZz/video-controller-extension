export const preventScroll = (event: WheelEvent) => {
  event.preventDefault()
  event.stopPropagation()

  return false
}

export const changeVideoSpeed = (event: WheelEvent, video: HTMLVideoElement) => {
  const scrollDirection = Math.sign(event.deltaY)
  video.playbackRate += scrollDirection < 0 ? 0.1 : -0.1

  preventScroll(event)
}
