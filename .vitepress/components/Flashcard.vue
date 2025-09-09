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
            🤔 Difficult
          </button>
          <button @click.stop="markGood" class="btn good">
            👍 Good
          </button>
          <button @click.stop="markEasy" class="btn easy">
            🎯 Easy
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
      <span class="progress-text">Review in {{ nextReview }} days</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  difficulty: {
    type: Number,
    default: 1
  }
})

const isFlipped = ref(false)
const currentDifficulty = ref(props.difficulty)
const lastReviewed = ref(new Date())
const nextReviewDays = ref(1)

const flipCard = () => {
  isFlipped.value = !isFlipped.value
}

const markDifficult = () => {
  currentDifficulty.value = Math.max(1, currentDifficulty.value - 0.5)
  updateReviewSchedule()
  resetCard()
}

const markGood = () => {
  currentDifficulty.value = Math.min(5, currentDifficulty.value + 0.2)
  updateReviewSchedule()
  resetCard()
}

const markEasy = () => {
  currentDifficulty.value = Math.min(5, currentDifficulty.value + 0.5)
  updateReviewSchedule()
  resetCard()
}

const updateReviewSchedule = () => {
  // Simplified Leitner system: easier cards reviewed less frequently
  const baseDays = [1, 2, 4, 7, 14, 30] // Days for difficulty levels 1-5
  nextReviewDays.value = baseDays[Math.floor(currentDifficulty.value) - 1] || 1
  lastReviewed.value = new Date()

  // Save progress to localStorage
  saveProgress()
}

const resetCard = () => {
  isFlipped.value = false
}

const progressWidth = computed(() => {
  return `${(currentDifficulty.value / 5) * 100}%`
})

const nextReview = computed(() => {
  return nextReviewDays.value
})

const saveProgress = () => {
  const cardId = `${props.question}-${props.answer}`.replace(/\s+/g, '-').toLowerCase()
  const progress = {
    difficulty: currentDifficulty.value,
    lastReviewed: lastReviewed.value,
    nextReviewDays: nextReviewDays.value
  }
  localStorage.setItem(`flashcard-${cardId}`, JSON.stringify(progress))
}

const loadProgress = () => {
  const cardId = `${props.question}-${props.answer}`.replace(/\s+/g, '-').toLowerCase()
  const saved = localStorage.getItem(`flashcard-${cardId}`)
  if (saved) {
    const progress = JSON.parse(saved)
    currentDifficulty.value = progress.difficulty
    lastReviewed.value = new Date(progress.lastReviewed)
    nextReviewDays.value = progress.nextReviewDays
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
