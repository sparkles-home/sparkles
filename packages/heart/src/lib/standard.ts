import type { FormatGroup, StandardValidateResult } from '../types'

/**
 * The emoji part of the format.
 */
const FORMAT_ITEM_EMOJI = '{{emoji}}'

/**
 * The group part of the format.
 */
const FORMAT_ITEM_GROUP = '{{group}}'

/**
 * The issue number part of the format.
 */
const FORMAT_ISSUE_NUMBER = '{{issue-number}}'

/**
 * The text part of the format.
 */
const FORMAT_ITEM_TEXT = '{{text}}'

/**
 * Validates a format string.
 *
 * @param format A format string to validate.
 * @returns A result indicating whether the format is valid.
 */
const validateFormat = (format: string): StandardValidateResult => {
  const missing: string[] = []

    ;[FORMAT_ITEM_EMOJI, FORMAT_ITEM_GROUP, FORMAT_ITEM_TEXT].forEach((item) => {
      if (!format.includes(item)) {
        missing.push(item)
      }
    })

  if (missing.length > 0) {
    return {
      valid: false,
      reason: `The format is missing the following required parts: ${missing.join(', ')}`,
    }
  } else {
    return {
      valid: true,
    }
  }
}

/**
 * Formats a format string to a regular expression.
 *
 * @param format The format string to format.
 * @param data The data to use for the format.
 * @returns A regular expression.
 */
const formatToRegex = (
  format: string,
  data: {
    group: FormatGroup
    emoji: string
    issueNumber?: string
  }
) => {
  const validateResult = validateFormat(format)
  if (!validateResult.valid) {
    throw new Error(
      `The format "${format}" is invalid, reason: ${validateResult.reason}`
    )
  }

  const regex = format
    .replace(FORMAT_ITEM_EMOJI, data.emoji)
    .replace(FORMAT_ITEM_GROUP, data.group)
    .replace(FORMAT_ISSUE_NUMBER, data.issueNumber || '')
    .replace(FORMAT_ITEM_TEXT, '.+')

  return new RegExp(`^${regex}$`)
}

/**
 * A factory function that creates a standard.
 *
 * @param format A format string to create a standard factory for.
 * @returns A factory function that creates a standard.
 */
export const createStandardFactory = (format: string) => {
  return (group: FormatGroup, emoji: string) => {
    const regex = formatToRegex(format, { group, emoji })
    return {
      format,
      group,
      emoji,
      regex,
      validate: (text: string) => regex.test(text),
      asserts: (text: string) => {
        if (!regex.test(text)) {
          throw new Error(`"${text}" does not match the standard "${format}"`)
        }
      },
      create: (text: string) => {
        return format
          .replace(FORMAT_ITEM_EMOJI, emoji)
          .replace(FORMAT_ITEM_GROUP, group)
          .replace(FORMAT_ITEM_TEXT, text)
      },
    }
  }
}
