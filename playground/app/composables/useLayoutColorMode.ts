export const useLayoutColorMode = () => {
  const colorMode = useColorMode()

  // 레이아웃별 컬러모드 설정
  const setLayoutColorMode = (mode: 'light' | 'dark' | 'system') => {
    colorMode.preference = mode
  }

  // 현재 컬러모드 상태
  const currentMode = computed(() => colorMode.value)

  // 컬러모드 토글
  const toggleColorMode = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }

  return {
    currentMode,
    setLayoutColorMode,
    toggleColorMode,
    colorMode,
  }
}
