# Synonyms-array

56122 unique words arranged as 38957 synonyms groups.

## Installation

```
$ npm install synonyms-array
```

## Methods

- `get`: Retrieves the synonym of the given word
- `search`: Searches in the library for all the words matching the substring

## Example Usage

```
const synonymsArray = require('synonyms-array');
console.log(synonymsArray.get('node'));
```

Output

```
[
  'boss',         'node',
  'thickening',   'pommel',
  'knob',         'guest',
  'client',       'invitee',
  'inspissation', 'thickener',
  'symptom',      'bubonic',
  'customer',     'nodulated',
  'noduled',      'unshapely',
  'nodular'
]
```
