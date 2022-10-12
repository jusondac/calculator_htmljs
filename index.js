const btn = document.querySelectorAll('#btn')
const display = document.querySelector('#display')

class Calculator {
  constructor() {
    this.res = -1
    this.calculate = ''
  }

  exec(obj) {
    console.log(obj === '=')
    if (obj === '=') {
      console.log('this is equal')
      this.calculate = eval(this.calculate)
      return
    } else if (obj === 'ac') {
      this.res = -1
      this.calculate = ''
      return
    } else {
      this.calculate += obj
      console.log(this.calculate)
    }
  }
}

calc = new Calculator()
display.innerHTML = calc.calculate

btn.forEach((d) => {
  d.addEventListener('click', function () {
    calc.exec(d.innerHTML)
    display.innerHTML = calc.calculate
  })
})
