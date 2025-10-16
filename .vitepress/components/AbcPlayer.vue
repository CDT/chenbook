<template>
  <div class="abc-wrapper">
    <div ref="notationEl" class="abc-notation"></div>
    <div v-if="audio" ref="audioEl" class="abc-audio"></div>
    <p v-if="error" class="abc-error">{{ error }}</p>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'

const props = defineProps({
  abc: { type: String, required: true },
  responsive: { type: Boolean, default: true },
  audio: { type: Boolean, default: true },
  paper: { type: Object, default: () => ({}) }
})

const notationEl = ref(null)
const audioEl = ref(null)
const error = ref('')
let ABCJS = null
let controller = null

function teardown() {
  if (controller) {
    try {
      controller.pause && controller.pause()
      controller.destroy && controller.destroy()
    } catch (err) {
      console.warn('Failed to tear down ABCJS controller', err)
    } finally {
      controller = null
    }
  }
  if (notationEl.value) notationEl.value.innerHTML = ''
  if (audioEl.value) audioEl.value.innerHTML = ''
}

async function render() {
  error.value = ''
  try {
    const mod = await import('abcjs')
    ABCJS = mod.default ?? mod
    if (!notationEl.value) return

    // Clear previous render
    teardown()

    const renderOpts = {
      add_classes: true,
      responsive: props.responsive ? 'resize' : undefined,
      ...props.paper
    }
    const visualObjs = ABCJS.renderAbc(notationEl.value, props.abc, renderOpts)

    if (props.audio && ABCJS.synth && ABCJS.synth.supportsAudio && ABCJS.synth.supportsAudio() && audioEl.value && visualObjs && visualObjs[0]) {
      controller = new ABCJS.synth.SynthController()
      controller.load(audioEl.value, null, {
        displayRestart: true,
        displayPlay: true,
        displayProgress: true,
        displayClock: true
      })

      // Do NOT start/resume AudioContext until user interacts.
      // Pass `userAction: false` so Chrome autoplay policies aren't triggered.
      await controller.setTune(visualObjs[0], false)
    } else if (props.audio && (!ABCJS.synth || (ABCJS.synth.supportsAudio && !ABCJS.synth.supportsAudio()))) {
      // Audio not supported; silently render notation and expose a hint.
      error.value = ''
    }
  } catch (e) {
    error.value = 'Failed to render ABC (client-only). If building statically, ensure this runs on the client.'
    // eslint-disable-next-line no-console
    console.error(e)
  }
}

onMounted(async () => {
  await nextTick()
  render()
})

watch(() => props.abc, async () => {
  await nextTick()
  render()
})

onBeforeUnmount(() => {
  teardown()
})
</script>

<style scoped>
.abc-wrapper { margin: 1rem 0; }
.abc-notation { overflow-x: auto; }
.abc-audio { margin-top: 0.5rem; }
.abc-error { color: #c00; font-size: 0.9rem; }
</style>
