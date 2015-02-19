
var anagram = function(gram){
	var anagramz = gram;
  function findAnagrams(wordList) {
    if (typeof wordList === "string") {
      list = [];
      for (var i=0; i<arguments.length; i++) {
        list.push(arguments[i]);
      }
      wordList = list;
    }
    var anagrams = [];
    wordList.forEach(function(word) {
      if (gram === word.toLowerCase()) return word;
      if (normalize(word) === normalize(anagramz)) return anagrams.push(word);
    });
    return anagrams;
  }
  return {
    matches: findAnagrams
  };
};


function normalize(string){
	return string.toLowerCase().split("").sort().join("");
}

module.exports = anagram;