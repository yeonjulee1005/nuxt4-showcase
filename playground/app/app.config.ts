export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'stone',
      success: 'sky',
      info: 'amber',
      error: 'rose',
    },
    theme: 'light',
  },
  theme: {
    screens: {
      //   sm: '340px',
    },
  },
  toaster: {
    position: 'top-right' as const,
    expand: true,
    duration: 1500,
  },
})
