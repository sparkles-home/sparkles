import { availableGroups, emojis } from './data'

/**
 * The emoji part of the format.
 */
export type FormatEmoji = (typeof emojis)[number]

/**
 * A group that is available for the commit message or pull request title.
 */
export type FormatGroup = (typeof availableGroups)[number]

/**
 * A serializable definition of a commit or pull request standard.
 */
export interface StandardDefinition {
  /**
   * The format of the standard, i.e. "[emoji] [group]: [text]".
   */
  format: string

  /**
   * The name of the standard, i.e. "Feature".
   */
  group: FormatGroup

  /**
   * The emoji to use for this standard, i.e. "🦄"
   */
  emoji: string
}

export type StandardValidateResult =
  | {
      valid: true
    }
  | {
      valid: false
      reason: string
    }

/**
 * A commit or pull request standard.
 */
export interface Standard extends StandardDefinition {
  /**
   * Validates the given text against this standard.
   *
   * @param text The text to validate.
   */
  validate(text: string): StandardValidateResult

  /**
   * Asserts that the given text is valid against this standard.
   *
   * @param text The text to assert.
   * @throws If the text is not valid.
   */
  asserts(text: string): void

  /**
   * Creates a commit or pull request title from the given text.
   *
   * @param text The text to create a title from.
   */
  create(text: string): string
}
