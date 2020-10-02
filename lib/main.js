const synonyms = require('./synonyms.json');
function getSynonyms(word) {
    const results = [];
    for (let group of synonyms) {
        if (group.includes(word)) {
            for (let word of group) {
                if (!results.includes(word)) {
                    results.push(word);
                }
            }
        }
    }
    return results;
}
module.exports = { getSynonyms };