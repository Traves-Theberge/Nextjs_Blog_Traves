// Create a new logger module
type LogLevel = 'info' | 'warn' | 'error'

const logWithLevel = (level: LogLevel, message: string, ...args: any[]) => {
  const timestamp = new Date().toISOString()
  const prefix = `[${timestamp}] ${level.toUpperCase()}:`
  
  if (process.env.NODE_ENV === 'development') {
    switch (level) {
      case 'info':
        console.log(prefix, message, ...args)
        break
      case 'warn':
        console.warn(prefix, message, ...args)
        break
      case 'error':
        console.error(prefix, message, ...args)
        break
    }
  }
}

export const logger = {
  info: (message: string, ...args: any[]) => logWithLevel('info', message, ...args),
  warn: (message: string, ...args: any[]) => logWithLevel('warn', message, ...args),
  error: (message: string, ...args: any[]) => logWithLevel('error', message, ...args)
} 