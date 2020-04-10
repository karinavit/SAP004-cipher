const cipher = {
  // ...
  encode: function (offset, string) {

    let novaEntrada = string.toUpperCase();
    let mensagemCifrada = "";

    for (let i = 0; i < novaEntrada.length; i++) {

      let codigoDaLetraAsc = novaEntrada[i].charCodeAt();
      let formulaEncode = ((codigoDaLetraAsc - 65 + offset) % 26) + 65;

      mensagemCifrada += String.fromCharCode(formulaEncode);


    }
    return mensagemCifrada;
  },

  decode: function (offset, string) {
    let novaEntrada = string.toUpperCase();
    let mensagemDecifrada = "";

    for (let i = 0; i < novaEntrada.length; i++) {

      let codigoDaLetraAsc = novaEntrada[i].charCodeAt();
      let formulaDecifrar = ((codigoDaLetraAsc - 90 - offset) % 26) + 90;

      mensagemDecifrada += String.fromCharCode(formulaDecifrar);

    }
    return mensagemDecifrada;
  }
};

export default cipher;
