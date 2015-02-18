

var words = function words(str) {
  var wordBank = str.split(/\s+/);
  var wordCount = {};
  wordBank.forEach(function(word){
    wordCount[word] = (!isNaN(wordCount[word]) ? wordCount[word]+1 : 1);
  });
  return wordCount;
};

module.exports = words;