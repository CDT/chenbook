<template>
  <div class="language-switcher">
    <button
      @click="toggleLanguage"
      class="lang-btn"
      :class="{ active: currentLanguage === 'en' }"
    >
      🇺🇸 EN
    </button>
    <button
      @click="toggleLanguage"
      class="lang-btn"
      :class="{ active: currentLanguage === 'zh' }"
    >
      🇨🇳 中文
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentLanguage = ref('en')

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'en' ? 'zh' : 'en'
  localStorage.setItem('chenbook-language', currentLanguage.value)

  // Emit language change event
  window.dispatchEvent(new CustomEvent('languageChange', {
    detail: { language: currentLanguage.value }
  }))
}

const loadSavedLanguage = () => {
  const saved = localStorage.getItem('chenbook-language')
  if (saved && (saved === 'en' || saved === 'zh')) {
    currentLanguage.value = saved
  }
}

onMounted(() => {
  loadSavedLanguage()
})
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.lang-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
  transition: all 0.2s;
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lang-btn.active {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

.lang-btn:focus {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
}
</style>
