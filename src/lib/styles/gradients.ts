// New file to consolidate gradient styles
export const gradients = {
  button: {
    primary: 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600',
    secondary: 'bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600',
    hover: 'before:bg-gradient-to-r before:from-blue-700 before:via-purple-700 before:to-blue-700'
  },
  text: {
    primary: {
      dark: 'bg-gradient-to-r from-white via-blue-400 to-white',
      light: 'bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900'
    },
    secondary: {
      dark: 'bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400',
      light: 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600'
    }
  }
} as const

// Add type for button variants
export type ButtonVariant = keyof typeof gradients.button 