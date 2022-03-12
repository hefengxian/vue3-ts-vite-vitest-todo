export function uuid(len = 8): string {
  let uuid = ''
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < len; i++) {
    uuid += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return uuid
}
