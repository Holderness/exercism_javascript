var Beer = {
  verse: function(bottles){
    var oneLessBottle = bottles-1;
    if (bottles === 2) return "2 bottles of beer on the wall, 2 " +
      "bottles of beer.\nTake one down and pass it around, 1 " +
      "bottle of beer on the wall.\n";
    if (bottles === 1) return "1 bottle of beer on the wall, 1 " +
      "bottle of beer.\nTake it down and pass it around, no more " +
      "bottles of beer on the wall.\n";
    if (bottles === 0) return "No more bottles of beer on the wall, " +
      "no more bottles of beer.\nGo to the store and buy some more, " +
      "99 bottles of beer on the wall.\n";
    return bottles + " bottles of beer on the wall, " + bottles +
      " bottles of beer.\nTake one down and pass it around, " +
      oneLessBottle + " bottles of beer on the wall.\n";
  },
  sing: function(bottleStart, bottleEnd){
    if (isNaN(bottleEnd)) bottleEnd = 0;
    song = "";
    for (var i = bottleStart; i >= bottleEnd; i--){
      song += (i === bottleEnd) ? this.verse(i) : this.verse(i) + "\n" ;
    }
    return song;
  }
};



module.exports = Beer;
