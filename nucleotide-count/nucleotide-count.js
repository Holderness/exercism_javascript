
function DNA(strand) {
	this.strand = strand || "";
	this.nucleotides = {A: 0, T: 0, C: 0, G: 0};

	for (var i =0; i < this.strand.length; i++) {
		if (!this.nucleotides.hasOwnProperty(strand[i])) {
			throw new Error("Cannot read: " + this.strand);
		}
	}
	
}

DNA.prototype = {
  count: function(nucleotide) {
    nucleotideCount = 0;
    for (var i = 0; i < this.strand.length; i++) {
      if (this.strand[i] === nucleotide) nucleotideCount++;
    }
    return nucleotideCount;
  },
  histogram: function() {
   for (var nucleotide in this.nucleotides){
      this.nucleotides[nucleotide] = this.count(nucleotide);
   }
   return this.nucleotides;
  }
};


module.exports = function(strand){
  return new DNA(strand);
};