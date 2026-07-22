/** Flyto2 Docs theme extension with a branded not-found experience. */
import DefaultTheme from 'vitepress/theme'
import NotFound from './NotFound.vue'

export default {
  extends: DefaultTheme,
  NotFound,
}
