// Usuários e tecnologias

const { log } = require("console");

const usuarios = [
  { nome: "Vinicius", tecnologias: ["HTML", "CSS"] },
  { nome: "Rafaela", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Julia", tecnologias: ["HTML", "Node.Js"] },
];

for (let i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`);
}

// Busca por tecnologia

function checaSeUsuarioUsaCSS(usuario) {
  const tecs = usuario.tecnologias;

  for (let i = 0; i < tecs.length; i++) {
    if (tecs[i] === "CSS") {
      return true;
    }
  }
  return false;
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuario  ${usuarios[i].nome} trabalha com CSS`);
  }
}
