

var words = function words(str) {
	var wordBank = str.split(/\s+/);
	var wordCount = {};
	for (i = 0; i < wordBank.length; i++) {
    if (!isNaN(wordCount[wordBank[i]])){
      wordCount[wordBank[i]]++;
    } else {
      wordCount[wordBank[i]] = 1;
    }
	}
	return wordCount;
};

module.exports = words;