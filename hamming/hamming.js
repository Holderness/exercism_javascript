var Hamming = {
  compute: function(strand1, strand2) {
    var diff = [];
    if (strand1.length === strand2.length) {
      strand1.split("").forEach(function(char, i) {
        if (char != strand2[i]) diff.push(char);
      });
    } else {
      throw new Error('DNA strands must be of equal length.');
    }
    return diff.length;
  }
};

module.exports = Hamming;