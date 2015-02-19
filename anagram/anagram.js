
var anagram = function anagram(word){
  word: word;
  return {
    matches: findAnagrams
  };
};

function findAnagrams(wordList) {
  wordList = Array.isArray(wordList) ? wordList : [].slice.call(arguments);
  return filterWords(wordList);
}

function filterWords(wordList){
  return wordList.filter(function(word){
    return isNotSameWord(word, anagram.word) && (normalize(word) === normalize(anagram.word));
  });
}

function isNotSameWord(word, anagram){
  return word.toLowerCase() != anagram.toLowerCase();
}

function normalize(string){
  return string.toLowerCase().split("").sort().join("");
}

module.exports = anagram;


