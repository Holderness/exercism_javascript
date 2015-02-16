//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(phrase) {
  if (isYelling(phrase)) {
    return 'Whoa, chill out!';
  } else if (isQuestion(phrase)) {
    return "Sure.";
  } else if (isSilence(phrase)) {
    return "Fine. Be that way!";
  } else {
    return 'Whatever.';
  }
};

function isYelling(phrase) {
	return (phrase === phrase.toUpperCase()) && (phrase != phrase.toLowerCase());
}

function isQuestion(phrase) {
	return phrase.slice(-1).indexOf("?") >= 0;
}

function isSilence(phrase) {
	return !phrase.trim();
}


module.exports = Bob;
