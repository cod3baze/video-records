const video = document.querySelector('video')
const recordButton = document.querySelector('button')

const deviceStats = {
  hasMedia: () => {
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
      return true
    }

    return false
  },
  inPlay: false,
}

const getUserPermitionForRecording = async () => {
  if(deviceStats.inPlay) {
    return
  }

  try {
    if(deviceStats.hasMedia) {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true })
      video.srcObject = mediaStream
      deviceStats.inPlay = true
      return
    }
    return alert('Sem permissão para gravar')
  } catch (err) {
    console.log(err.message)
  }
}
recordButton.addEventListener('click', getUserPermitionForRecording)
