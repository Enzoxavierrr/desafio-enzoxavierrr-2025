
class AbrigoAnimais {
  constructor() {
    this.animais = {
      'Rex':    { tipo: 'cão',   brinquedos: ['RATO', 'BOLA'] },
      'Mimi':   { tipo: 'gato',  brinquedos: ['BOLA', 'LASER'] },
      'Fofo':   { tipo: 'gato',  brinquedos: ['BOLA', 'RATO', 'LASER'] },
      'Zero':   { tipo: 'gato',  brinquedos: ['RATO', 'BOLA'] },
      'Bola':   { tipo: 'cão',   brinquedos: ['CAIXA', 'NOVELO'] },
      'Bebe':   { tipo: 'cão',   brinquedos: ['LASER', 'RATO', 'BOLA'] },
      'Loco':   { tipo: 'jabuti',brinquedos: ['SKATE', 'RATO'] },
    };
    this.brinquedosValidos = [
      'RATO', 'BOLA', 'LASER', 'CAIXA', 'NOVELO', 'SKATE'
    ];
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {


    const pessoa1 = brinquedosPessoa1.split(',').map(x => x.trim());
    const pessoa2 = brinquedosPessoa2.split(',').map(x => x.trim());
    const ordem = ordemAnimais.split(',').map(x => x.trim());

    const animaisSet = new Set();
    for (let a of ordem) {
      if (!this.animais[a]) {
        return { erro: 'Animal inválido' };
      }
      if (animaisSet.has(a)) {
        return { erro: 'Animal inválido' };
      }
      animaisSet.add(a);
    }

    const brinquedosSet1 = new Set();
    for (let b of pessoa1) {
      if (!this.brinquedosValidos.includes(b)) {
        return { erro: 'Brinquedo inválido' };
      }
      if (brinquedosSet1.has(b)) {
        return { erro: 'Brinquedo inválido' };
      }
      brinquedosSet1.add(b);
    }
    const brinquedosSet2 = new Set();
    for (let b of pessoa2) {
      if (!this.brinquedosValidos.includes(b)) {
        return { erro: 'Brinquedo inválido' };
      }
      if (brinquedosSet2.has(b)) {
        return { erro: 'Brinquedo inválido' };
      }
      brinquedosSet2.add(b);
    }
    
    let resultado = [];
    let adotados1 = 0, adotados2 = 0;
    for (let animalNome of ordem) {
      const animal = this.animais[animalNome];
      let pessoa1Ok = this.temBrinquedos(pessoa1, animal.brinquedos, animal.tipo === 'gato');
      let pessoa2Ok = this.temBrinquedos(pessoa2, animal.brinquedos, animal.tipo === 'gato');

      if (pessoa1Ok && pessoa2Ok) {
        resultado.push(`${animalNome} - abrigo`);
      } else if (pessoa1Ok && adotados1 < 3) {
        resultado.push(`${animalNome} - pessoa 1`);
        adotados1++;
      } else if (pessoa2Ok && adotados2 < 3) {
        resultado.push(`${animalNome} - pessoa 2`);
        adotados2++;
      } else {
        resultado.push(`${animalNome} - abrigo`);
      }
    }
    resultado.sort((a, b) => {
      const nomeA = a.split(' - ')[0];
      const nomeB = b.split(' - ')[0];
      return nomeA.localeCompare(nomeB);
    });

    resultado = resultado.sort((a, b) => {
      const nomeA = a.split(' - ')[0];
      const nomeB = b.split(' - ')[0];
      return nomeA.localeCompare(nomeB);
    });
    return { lista: resultado, erro: undefined };
  }

  //auxiliar para verificar se a pessoa tem os brinquedos necessários de acordo com a regra
  temBrinquedos(brinquedosPessoa, brinquedosAnimal) {
    let idx = 0;
    for (let b of brinquedosPessoa) {
      if (b === brinquedosAnimal[idx]) idx++;
      if (idx === brinquedosAnimal.length) return true;
    }
    return idx === brinquedosAnimal.length;
  }
}

export { AbrigoAnimais as AbrigoAnimais };
