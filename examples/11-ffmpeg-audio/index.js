import sdl from '@kmamal/sdl'
import path from 'path'
import { loadAudio } from './ffmpeg.js'

const channels = 1
const frequency = 48e3
const audioInstance = sdl.audio.openDevice({ type: 'playback' }, {
	channels,
	frequency,
	format: 'f32lsb',
})

const dir = path.dirname(import.meta.url)
const buffer = await loadAudio(
	path.join(dir, 'assets/audio.wav'),
	{ channels, frequency },
)

audioInstance.enqueue(buffer)
audioInstance.play()
