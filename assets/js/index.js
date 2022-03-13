function calculaIdade () {
  const ano = new Date().getFullYear();
  const nascimento = 1999

  return ano - nascimento
}

document.getElementById('level').textContent = `Nível ${calculaIdade()}`