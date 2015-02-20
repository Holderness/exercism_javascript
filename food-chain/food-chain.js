
var song = {
  animalList: ["fly", "spider", "bird", "cat", "dog", "goat", "cow"],
  secondLineList: [
    "It wriggled and jiggled and tickled inside her.\n",
    "How absurd to swallow a bird!\n",
    "Imagine that, to swallow a cat!\n",
    "What a hog, to swallow a dog!\n",
    "Just opened her throat and swallowed a goat!\n",
    "I don't know how she swallowed a cow!\n"
    ],
  part1: function(animal, verseNo) {
    var lyrics = "I know an old lady who swallowed a " + animal + ".\n";
    if (verseNo != 1) {
      for (var i = 0; i < this.secondLineList.length; i++) {
        if ((verseNo-2) === i) lyrics += this.secondLineList[i];
      }
    }
    return lyrics;
  },
  part2: function(animal, verseNo){
    var lyrics = "";
    for (var i = (verseNo-1); i > 0 ; i--) {
      lyrics += "She swallowed the " + this.animalList[(i)] +
        " to catch the " + this.animalList[(i-1)] + ".\n";
      if ( i === 2 ) {
        lyrics = lyrics.substr(0, lyrics.length-2) +
        " that wriggled and jiggled and tickled inside her.\n";
      }
    }
    return lyrics;
  },
  part3: function(animal, verseNo) {
    return "I don't know why she swallowed the fly." +
    " Perhaps she'll die.\n";
  },
  part4: function() {
    return "I know an old lady who swallowed a horse.\n" +
    "She's dead, of course!\n";
  },
  verse: function(verseNumber) {
    var animal = this.animalList[(verseNumber-1)];
    lyrics = "";
    for (var i = 1; i <= 3; i++) {
      lyrics += this["part"+i](animal, verseNumber);
    }
    if (verseNumber === 8) lyrics = this.part4();
    return lyrics;
  },
  verses: function(startVerse, endVerse) {
    var lyrics = "";
    for (var i = startVerse; i <= endVerse; i++) {
      lyrics += this.verse(i) + "\n";
    }
    return lyrics;
  }
};



module.exports = song;