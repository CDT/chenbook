<template>
  <div class="abc-wrapper">
    <div ref="notationEl" class="abc-notation"></div>
    <div v-if="audio" ref="audioEl" class="abc-audio"></div>
    <p v-if="error" class="abc-error">{{ error }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, nextTick } from 'vue'

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

async function render() {
  error.value = ''
  try {
    const mod = await import('abcjs')
    ABCJS = mod.default ?? mod
    if (!notationEl.value) return

    // Clear previous render
    notationEl.value.innerHTML = ''
    if (audioEl.value) audioEl.value.innerHTML = ''

    const renderOpts = {
      add_classes: true,
      responsive: props.responsive ? 'resize' : undefined,
      ...props.paper
    }
    const visualObjs = ABCJS.renderAbc(notationEl.value, props.abc, renderOpts)

    if (props.audio && ABCJS.synth && audioEl.value && visualObjs && visualObjs[0]) {
      controller = new ABCJS.synth.SynthController()
      controller.load(audioEl.value, null, {
        displayRestart: true,
        displayPlay: true,
        displayProgress: true,
        displayClock: true
      })

      // Ensure audio context and soundfont are ready when user hits play
      await controller.setTune(visualObjs[0], true)
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
</script>

<style scoped>
.abc-wrapper { margin: 1rem 0; }
.abc-notation { overflow-x: auto; }
.abc-audio { margin-top: 0.5rem; }
.abc-error { color: #c00; font-size: 0.9rem; }
</style>

