const animes = [
  {
    id: 1,
    nome: "Dragon Ball",
    autor: "Akira Toriyama",
  },
  {
    id: 2,
    nome: "Yu Yu Hakusho",
    autor: "Yoshihiro Togashi",
  },
  {
    id: 3,
    nome: "Saint Seiya",
    autor: "Masami Kurumada",
  },
  {
    id: 4,
    nome: "Dragon Ball Z",
    autor: "Akira Toriyama",
  },
  {
    id: 5,
    nome: "Naruto",
    autor: "Masashi Kishimoto",
  },
];

//Retorne um novo array contendo apenas os animes que foram criados pelo autor 'Akira Toriyama'.
//Usar for
// function akiraToriyama (){
//     let criador = []
//     for(let i = 0 ; i < animes.length ; i++){
//         if(animes[i].autor == "Akira Toriyama"){
//             criador.push(animes[i])
//         }
//     }return criador
// }

//  console.log(akiraToriyama(animes))

// Usar for...of

function akiraToriyama2() {
  let autor1 = []
  for(let criador in animes){
    if(animes[criador].autor == "Akira Toriyama"){
     autor1.push(animes[criador])
    }
 }
 return autor1
}

//Salve para o morro dos índios

console.log(akiraToriyama2());

// Usar filter()

//2 - Fazendo uso do método filter(), uma vez encontrado as obras do mestre Akira Toriyama, substitua o nome do autor pelo seu.
