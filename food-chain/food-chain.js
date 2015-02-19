
var song = {
  animalList: ["fly", "spider", "bird", "cat", "dog", "goat", "cow"],
  part1: function(animal, verseNo){
    var secondLineList = [
    "It wriggled and jiggled and tickled inside her.\n",
    "How absurd to swallow a bird!\n",
    "Imagine that, to swallow a cat!\n",
    "What a hog, to swallow a dog!\n",
    "Just opened her throat and swallowed a goat!\n",
    "I don't know how she swallowed a cow!\n"
    ];
    var lyrics = "I know an old lady who swallowed a " + animal + ".\n";
    if (animal != "fly"){
      for (var i = 0; i < secondLineList.length; i++){
        if ((verseNo-2) === i) lyrics += secondLineList[i];
      }
    }
    return lyrics;
  },
  part2: function(animal, verseNo){
    var lyrics = "";
    var spiderContextCounter = (verseNo);
    for (var i = (verseNo); i > 1 ; i--){
      lyrics += "She swallowed the " + song.animalList[(i-1)] +
        " to catch the " + song.animalList[(i-2)] + ".\n";
      spiderContextCounter--;
      if ( i === (spiderContextCounter)){
        lyrics = lyrics.substr(0, lyrics.length-2) +
        " that wriggled and jiggled and tickled inside her.\n";
      }
    }
    return lyrics;
  },
  part3: function(animal, verseNo){
    return "I don't know why she swallowed the fly." +
    " Perhaps she'll die.\n";
  },
  spiderVerseAddition: function(lyrics){

  },
  verse: function(verseNumber){
    var animal = song.animalList[(verseNumber-1)];
    lyrics = "";
    for (var i = 1; i <= 3; i++) {
      lyrics += song["part"+i](animal, verseNumber);
    }
    return lyrics;
  }

};



module.exports = song;