var Hamming = {

  compute: function(strand1, strand2) {

    if (strand1.length != strand2.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    var diff = 0;
    strand1.split("").forEach(function(char, i) {
      if (char != strand2[i]) diff++;
    });
    
    return diff;
  }
};

module.exports = Hamming;