function contar() {
  let ini = document.querySelector('#txti')
  let fim = document.querySelector('#txtf')
  let passo = document.querySelector('#txtp')
  let res = document.querySelector('#res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.style.color = "white"
        res.innerHTML = `<p>Imposível contar!</p>`
    }  else {
         res.innerHTML = `<p>Contando:</p> <br>`
         let i = Number(ini.value)
         let f = Number(fim.value)
         let p = Number(passo.value)
           if (p <= 0) {
               window.alert(`Passo inválido! Considerando PASSO 1`)
               p = 1
           }  if (i <= f) {
                 let c = 1
                 do {
                     res.style.color = "white"
                     res.innerHTML += ` ${c} \u{1f449}`
                     c += p
                 } while (c <= f)
              } else {
                let c = i
               do {
                    res.style.color = "white"
                    res.innerHTML += ` ${c} \u{1F449}`
                    c -= p
                }  while (c >= f)
              }
              res.innerHTML += `\u{1F3C1}`
       }
}