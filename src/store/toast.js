import { ref } from 'vue'
import { SUCCESS } from '@/store/constants'

export const statusOfToast = ref(SUCCESS)

export const TOAST_TEXT = ref('')

export function resetToast () {
  TOAST_TEXT.value = ''
}
