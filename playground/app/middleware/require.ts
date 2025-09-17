export default defineNuxtRouteMiddleware((_to, _from) => {
  const toast = useToast()
  const userStore = useShocaseStore()

  const { introCountUp } = storeToRefs(userStore)

  if (introCountUp.value < 15) {
    toast.add({
      title: '조건을 충족하지 못했어요!',
      description: '15이상을 만들어주세요!',
      color: 'error',
    })
    return navigateTo('/')
  }
  else {
    toast.add({
      title: '조건을 충족했어요!',
      description: '15번이나 누르셨군요!',
      color: 'success',
    })
  }
})
