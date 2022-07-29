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
                if (this._dna[i] === pAequor.dna[i]) {
                    equalBases.push(this._dna[i]);
                    console.log(equalBases)
                }
            }
            console.log(`specimen #${this._specimenNum} and #${pAequor._specimenNum} have ${equalBases.length / this._dna.length} in common`)
        },
        willLikelySurvive() {
            counter = 0;
            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === 'G' || this.dna[i] === 'C') {
                    counter++;
                }
            }
            return counter / this.dna.length >= 0.6
        }
    }
}

let newSpecimen = []
let survivors = []
let i = 0;
while (survivors.length < 30) {
    newSpecimen[i] = pAequorFactory(i, mockUpStrand());
    if (newSpecimen[i].willLikelySurvive()) {
        survivors.push(newSpecimen[i])
    }
    i++;
}

console.log(survivors.length)
