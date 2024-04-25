function changePageTitle(title) {
  document.title = title
}

function generateInfoSection(src, nomeEstado) {
  const li = document.createElement('li')
  li.textContent = `Informações sobre ${nomeEstado}`

  section.body.appendChild(li)
}

async function getAllEstados() {
  try {
    await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome') //BUSCA TODOS OS ESTADOS
    .then(data => {
    return data.json();
    })
    .then(post => {
    console.log(post);
    });

  } catch (error) {
    console.error(error)
  }
}

async function getEstadosByName(sigla) {
  try {

    await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}') //BUSCA ESTADO POR SIGLA INSERIDO
    .then(data => {
    return data.json();
    })
    .then(post => {
    console.log(post);
    });

  } catch (error) {
    console.error(error)
  }
}

getAllEstados()

