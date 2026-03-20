<script setup lang="ts">
import { onMounted } from 'vue'

const locales = ['de', 'es', 'fr', 'hi', 'id', 'it', 'ja', 'ko', 'pl', 'pt-BR', 'th', 'tr', 'vi', 'zh-TW']

onMounted(() => {
  const path = window.location.pathname
  for (const locale of locales) {
    if (path.startsWith(`/${locale}/`)) {
      // Locale page doesn't exist — redirect to that locale's modules root
      window.location.replace(`/${locale}/modules/`)
      return
    }
  }
})
</script>

<template>
  <div class="not-found">
    <div class="not-found-content">
      <p class="code">404</p>
      <h1 class="title">Page Not Found</h1>
      <p class="description">The page you're looking for doesn't exist.</p>
      <div class="actions">
        <a class="link" href="/">Go Home</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
}
.code {
  font-size: 4rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin: 0;
}
.title {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}
.description {
  color: var(--vp-c-text-2);
  margin: 0.5rem 0 1.5rem;
}
.link {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}
.link:hover {
  background: var(--vp-c-brand-2);
}
</style>
