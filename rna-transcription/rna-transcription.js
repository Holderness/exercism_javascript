
module.exports = toRna;

var DnaToRna = {
	C: "G",
	G: "C",
	A: "U",
	T: "A"
};

function toRna(Dna){
	Rna = "";
  for (var i = 0, x = Dna.length; i < x; i++) {
    Rna += DnaToRna[Dna[i]];
  }
  return Rna;
}
