// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
    return {
        _specimenNum: specimenNum,
        get specimenNum() {
            return this._name;
        },
        set specimenNum(specimenNum) {
            this._specimenNum = specimenNum;
        },
        _dna: dna,
        get dna() {
            return this._dna;
        },
        set dna(dna) {
            this._dna = dna;
        },
        mutate() {
            let rndBase = Math.floor(Math.random() * 14);
            console.log(rndBase)
            // check the ones it cannot become
            const dnaBases = ['A', 'T', 'C', 'G']
            newBases = []
            for (let i = 0; i < dnaBases.length; i++) {
                if (dnaBases[i] !== rndBase) {
                    newBases.push(dnaBases[i]);
                }
            }
            dna[rndBase] = newBases[Math.floor(Math.random() * 2)]
            return dna
        },
        compareDNA(pAequor) {
          let equalBases = [];
          for (let i = 0; i < this._dna.length; i++) {
                if (this._dna[i] === dna[i]) {
                    equalBases.push(this._dna[i]);
                }
          }
          console.log(`specimen #${this._specimenNum} and #${specimenNum} have ${equalBases.length/this._dna.length} in common`)
        }
    }
}

let ex1 = pAequorFactory(1, ['A', 'C', 'T', 'G'])
let ex2 = pAequorFactory(2, ['C', 'A', 'T', 'T'])
console.log(organism1)
// organism1.mutate()
// console.log(organism1)
