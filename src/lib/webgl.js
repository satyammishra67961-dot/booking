let cachedSupport = null

export function supportsWebGL() {
  if (cachedSupport !== null) return cachedSupport

  try {
    const canvas = document.createElement('canvas')
    const context =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')

    cachedSupport = Boolean(context)
  } catch {
    cachedSupport = false
  }

  return cachedSupport
}
