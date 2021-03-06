// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

const programador = {
  nome: "Leonardo Brizolla",
  idade: 22,
  tecnologias: [
    { nome: "JavaScript", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" },
  ],
};

console.log(
  `O usuário ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade} `
);
