<template>
  <div class="flashcard-container">
    <div
      class="flashcard"
      :class="{ flipped: isFlipped }"
      @click="flipCard"
    >
      <div class="flashcard-front">
        <div class="question">
          <h4>{{ question }}</h4>
        </div>
        <div class="flip-hint">
          <span>Click to reveal answer</span>
          <svg class="flip-icon" viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      </div>
      <div class="flashcard-back">
        <div class="answer">
          <h4>Answer:</h4>
          <p>{{ answer }}</p>
        </div>
        <div class="actions">
          <button @click.stop="markDifficult" class="btn difficult">
            Difficult
          </button>
          <button @click.stop="markGood" class="btn good">
            Good
          </button>
          <button @click.stop="markEasy" class="btn easy">
            Easy
          </button>
        </div>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: progressWidth }"
        ></div>
      </div>
      <span class="progress-text">{{ nextReviewLabel }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const STORAGE_PREFIX = 'flashcard-'
const MS_PER_DAY = 86_400_000

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  initialEase: {
    type: Number,
    default: 2.5
  }
})

const isFlipped = ref(false)
const progress = ref(createDefaultProgress())

const storageKey = computed(() => `${STORAGE_PREFIX}${props.id}`)
const legacyStorageKey = computed(() => {
  const slug = `${props.question}-${props.answer}`.replace(/\s+/g, '-').toLowerCase()
  return `${STORAGE_PREFIX}${slug}`
})

function createDefaultProgress() {
  const now = new Date()
  return {
    easeFactor: props.initialEase,
    interval: 0,
    repetitions: 0,
    lastReviewed: now.toISOString(),
    due: now.toISOString()
  }
}

const flipCard = () => {
  isFlipped.value = !isFlipped.value
}

const markDifficult = () => handleReview(2)
const markGood = () => handleReview(4)
const markEasy = () => handleReview(5)

function handleReview(quality) {
  const now = new Date()
  const state = {
    easeFactor: progress.value.easeFactor ?? props.initialEase,
    interval: progress.value.interval ?? 0,
    repetitions: progress.value.repetitions ?? 0
  }

  let easeFactor = state.easeFactor
  let interval = state.interval
  let repetitions = state.repetitions

  if (quality < 3) {
    repetitions = 0
    interval = 1
  } else {
    if (repetitions === 0) {
      interval = 1
    } else if (repetitions === 1) {
      interval = 6
    } else {
      interval = Math.max(1, Math.round(interval * easeFactor))
    }

    repetitions += 1
    easeFactor = Math.max(1.3, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)))
  }

  const due = new Date(now.getTime() + interval * MS_PER_DAY)

  progress.value = {
    easeFactor: Number(easeFactor.toFixed(2)),
    interval,
    repetitions,
    lastReviewed: now.toISOString(),
    due: due.toISOString()
  }

  saveProgress()
  resetCard()
}

const progressWidth = computed(() => {
  const interval = progress.value.interval
  if (!interval) return '2%'
  const normalized = Math.min(1, Math.log(interval + 1) / Math.log(366))
  return `${Math.max(5, Math.round(normalized * 100))}%`
})

const nextReviewLabel = computed(() => {
  const due = new Date(progress.value.due)
  const now = new Date()
  const diff = Math.ceil((due.getTime() - now.getTime()) / MS_PER_DAY)

  if (!Number.isFinite(diff) || diff <= 0) {
    return 'Review today'
  }
  if (diff === 1) {
    return 'Review in 1 day'
  }
  return `Review in ${diff} days`
})

function resetCard() {
  isFlipped.value = false
}

function saveProgress() {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(storageKey.value, JSON.stringify(progress.value))
}

function loadProgress() {
  if (typeof window === 'undefined') return

  const raw = window.localStorage.getItem(storageKey.value)
  const parsed = parseProgress(raw)
  if (parsed) {
    progress.value = parsed
    return
  }

  const legacyRaw = window.localStorage.getItem(legacyStorageKey.value)
  const legacyProgress = migrateLegacyProgress(parseLegacy(legacyRaw))
  if (legacyProgress) {
    progress.value = legacyProgress
    saveProgress()
    window.localStorage.removeItem(legacyStorageKey.value)
  }
}

function parseProgress(raw) {
  if (!raw) return undefined
  try {
    const data = JSON.parse(raw)
    if (!data) return undefined
    const easeFactor = Number(data.easeFactor)
    const interval = Number(data.interval)
    const repetitions = Number(data.repetitions)
    const lastReviewed = new Date(data.lastReviewed)
    const due = new Date(data.due)

    if (Number.isFinite(easeFactor) && Number.isFinite(interval) && Number.isFinite(repetitions) && !Number.isNaN(lastReviewed.getTime()) && !Number.isNaN(due.getTime())) {
      return {
        easeFactor,
        interval,
        repetitions,
        lastReviewed: lastReviewed.toISOString(),
        due: due.toISOString()
      }
    }
  } catch (error) {
    console.warn('Unable to parse flashcard progress', error)
  }
  return undefined
}

function parseLegacy(raw) {
  if (!raw) return undefined
  try {
    return JSON.parse(raw)
  } catch (error) {
    console.warn('Unable to parse legacy flashcard progress', error)
    return undefined
  }
}

function migrateLegacyProgress(data) {
  if (!data || typeof data !== 'object') return undefined
  const now = new Date()
  const lastReviewed = data.lastReviewed ? new Date(data.lastReviewed) : now
  const interval = Number(data.nextReviewDays) || 1
  const due = new Date(lastReviewed)
  due.setDate(due.getDate() + interval)

  return {
    easeFactor: props.initialEase,
    interval,
    repetitions: 0,
    lastReviewed: (Number.isNaN(lastReviewed.getTime()) ? now : lastReviewed).toISOString(),
    due: (Number.isNaN(due.getTime()) ? now : due).toISOString()
  }
}

onMounted(() => {
  loadProgress()
})
</script>

<style scoped>
.flashcard-container {
  margin: 1rem 0;
  max-width: 500px;
}

.flashcard {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 200px;
  perspective: 1000px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  width: 100%;
}

.flashcard.flipped {
  transform: rotateY(180deg);
}

.flashcard-front,
.flashcard-back {
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1.5rem;
  position: absolute;
  width: 100%;
}

.flashcard-front {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.flashcard-back {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  transform: rotateY(180deg);
}

.question {
  flex: 1;
  display: flex;
  align-items: center;
  text-align: center;
}

.question h4 {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.4;
}

.flip-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  opacity: 0.8;
  font-size: 0.9rem;
}

.flip-icon {
  fill: currentColor;
}

.answer {
  flex: 1;
  text-align: center;
}

.answer h4 {
  margin: 0 0 1rem 0;
  font-size: 1rem;
}

.answer p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.actions {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
}

.btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  transition: all 0.2s;
}

.btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}

.progress {
  margin-top: 1rem;
  text-align: center;
}

.progress-bar {
  background: #e0e0e0;
  border-radius: 10px;
  height: 8px;
  margin-bottom: 0.5rem;
  overflow: hidden;
  width: 100%;
}

.progress-fill {
  background: linear-gradient(90deg, #667eea, #764ba2);
  height: 100%;
  transition: width 0.3s ease;
}

.progress-text {
  color: #666;
  font-size: 0.8rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .flashcard {
    height: 180px;
  }

  .flashcard-front,
  .flashcard-back {
    padding: 1rem;
  }

  .actions {
    flex-direction: column;
    gap: 0.3rem;
  }

  .btn {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>

