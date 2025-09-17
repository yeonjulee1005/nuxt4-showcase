import { defineStore } from 'pinia'

export const useShocaseStore = defineStore('useShocaseStore', () => {
  /**
   * ! Pinia State !
   *
   * @param introCountUp 페이지 카운트 업
   * @param visitFileUpload 파일 업로드 페이지 방문 횟수
   * @param visitTable Table 페이지 방문 횟수
   * @param visitColorPicker Color Picker 페이지 방문 횟수
   * @param colorPickerValue Color Picker 값
   *
   */

  const introCountUp = ref<number>(0)
  const visitFileUpload = ref<number>(0)
  const visitTable = ref<number>(0)
  const visitColorPicker = ref<number>(0)
  const colorPickerValue = ref<string>('lab(68.88% -60.41% 32.55%)')
  const fileUploadValue = ref<File | null>(null)

  return {
    introCountUp,
    visitFileUpload,
    visitTable,
    visitColorPicker,
    colorPickerValue,
    fileUploadValue,
  }
}, {
  persist: {
    storage: typeof window !== 'undefined' ? localStorage : undefined,
  },
})
