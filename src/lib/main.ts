import synonyms from './synonyms.json';

// This method can be mocked in unit-tests
export const getSynonymGroups = (): string[][] => synonyms;

/**
 * Returns a list of synonyms of the given word, if no synonyms were found, it will return an empty array.
 * @param word
 */
export const get = (word: string): string[] => {
  // Find the group that has the word
  const group = getSynonymGroups().filter((g) => g.includes(word));

  if (group[0]) {
    // Filter out the input
    return group[0].filter((entry) => entry !== word);
  }

  return [];
};