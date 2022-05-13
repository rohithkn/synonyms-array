import fileSynonyms from './synonyms.json';
import * as main from './main';
import { get, getSynonymGroups, search } from './main';

beforeEach(() => {
  jest.resetModules();
});

describe('getSynonyms', () => {
  it(`returns synonyms`, () => {
    // Act
    const result = getSynonymGroups();

    // Assert
    expect(result).toBe(fileSynonyms);
  });
});

describe('get', () => {
  const testData = [
    {
      word: 'sdjfkasdfaksfjaskldjf',
      synonyms: [
        ['ruby', 'python', 'php', 'node'],
        ['haskell', 'scala'],
      ],
      expectedSynonyms: [],
    },
    {
      word: 'node',
      synonyms: [
        ['ruby', 'python', 'php', 'node'],
        ['haskell', 'scala'],
        ['baseball', 'football'],
      ],
      expectedSynonyms: ['ruby', 'python', 'php'],
    },
    {
      word: 'a',
      synonyms: [
        ['b', 'c', 'd', 'e'],
        ['f', 'g'],
        ['a', 'h'],
      ],
      expectedSynonyms: ['h'],
    },
  ];

  testData.forEach(({ word, expectedSynonyms, synonyms }) => {
    it(`returns '${expectedSynonyms.join(', ')}' on input '${word}'`, () => {
      // Arrange
      jest.spyOn(main, 'getSynonymGroups').mockReturnValue(synonyms);

      // Act
      const result = get(word);

      // Assert
      expect(result).toEqual(expectedSynonyms);
    });
  });
});

describe('search', () => {
  const testData = [
    {
      substring: 'a',
      synonyms: [],
      expectedWords: [],
    },
    {
      substring: 'abc',
      synonyms: [
        ['ab', 'ba', 'ca', 'ec'],
        ['abc', 'cbaabc', 'aab'],
        ['a', 'b', 'c'],
      ],
      expectedWords: ['abc', 'cbaabc'],
    },
    {
      substring: 'node',
      synonyms: [
        ['node', 'nodejs', 'ruby'],
        ['ruby', 'python'],
        ['backnode', 'backbone']
      ],
      expectedWords: ['node', 'nodejs', 'backnode'],
    },
  ];

  testData.forEach(({ substring, expectedWords, synonyms }) => {
    it(`returns '${expectedWords.join(', ')}' on input '${substring}'`, () => {
      // Arrange
      jest.spyOn(main, 'getSynonymGroups').mockReturnValue(synonyms);

      // Act
      const result = search(substring);

      // Assert
      expect(result).toEqual(expectedWords);
    });
  });
});
