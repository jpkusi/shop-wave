/**
 * Format currency amount
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (USD, EUR, etc.)
 * @param {string} locale - Locale for formatting
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2
  }).format(amount)
}

/**
 * Format date
 * @param {string|Date} date - Date to format
 * @param {object} options - Format options
 * @returns {string} Formatted date string
 */
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  
  const mergedOptions = { ...defaultOptions, ...options }
  
  return new Date(date).toLocaleDateString('en-US', mergedOptions)
}

/**
 * Truncate text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} length - Max length before truncation
 * @returns {string} Truncated text
 */
export const truncateText = (text, length = 30) => {
  if (!text || text.length <= length) return text
  return text.slice(0, length) + '...'
}

/**
 * Calculate percentage change
 * @param {number} current - Current value
 * @param {number} previous - Previous value
 * @returns {number} Percentage change
 */
export const calculatePercentChange = (current, previous) => {
  if (previous === 0) return current > 0 ? 100 : 0
  return ((current - previous) / previous) * 100
}