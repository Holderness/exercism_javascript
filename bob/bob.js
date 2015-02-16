
var Bob = function() {};

Bob.prototype.hey = function(phrase) {
  if (isYelling(phrase)) return 'Whoa, chill out!';
  if (isQuestion(phrase)) return "Sure.";
  if (isSilence(phrase)) return "Fine. Be that way!";
  return 'Whatever.';
};

function isYelling(phrase) {
	return (phrase === phrase.toUpperCase()) && (phrase !== phrase.toLowerCase());
}

function isQuestion(phrase) {
	return phrase.slice(-1).indexOf("?") >= 0;
}

function isSilence(phrase) {
	return !phrase.trim();
}

module.exports = Bob;
