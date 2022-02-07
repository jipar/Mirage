'use strict';

let nav = document.querySelector('#nav'),
  mayak = document.querySelector('.mayak');
nav.style.transition = '.5s'
mayak.style.display = 'none'

window.onscroll = () => {
  if (window.pageYOffset > 200) {
    mayak.classList.add('mTop')
    mayak.innerHTML = '<a href="#nav"><span><i class="fas fa-angle-up fa-2x"></i></span></a>';
    mayak.style.display = 'block'
    mayak.style.color = '#000'
  } else {
    mayak.classList.remove('mTop')
    mayak.innerHTML = '';
    mayak.style.display = 'none'
  }
}
let modal = document.querySelector('.modal');
let close = document.querySelector('.modal__close');
let btn = document.querySelectorAll('.btnn')

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = () => {
    modal.style.display = 'block'
  }
}
close.onclick = () => {
  modal.style.display = 'none'
}

let stick = document.querySelectorAll('.stick')
let prof = document.querySelectorAll('.test_img')
let names = ['Jorge Morrison', 'Кто то другой', 'Чужой', 'Тупой']
let citys = ['North California,USA', 'New York,USA', 'Top sicret', 'B.O.M.J.']
let comments = ['“ Heartiest congratulations to the team for Future projects. I extend thankful wishes and wish the team best of luck for the future assignments to come. Your effort is gladly ”', '”I met you in the dark, you lit me upYou made me feel We danced the night away, we drank too much I held your hair back when You were throwing up”', '”Come here boy, rest your head for a while I know youve been traveling a long time Come here boy, sing your songs with a smilWatche”', '”Болт — в данном случае — короткая арбалетная стрела. Не путать с болтом монтажным. Летящий монтажный болт вам ничего не сделает”']
let qname = document.querySelector('.test_text4')
let qcity = document.querySelector('.test_text5')
let qcomm = document.querySelector('.test_text3')
let stickNext = document.querySelector('.iright')
let stickPrev = document.querySelector('.ileft')
let count = 0;

for (let i = 0; i < prof.length; i++) {
  prof[i].style.display = 'none'
}
prof[0].style.display = 'block'

stickNext.onclick = () => {
  if (count < 3) {
    prof[count].style.display = 'none'
    count++
    qcomm.innerHTML = comments[count]
    qname.innerHTML = names[count]
    qcity.innerHTML = citys[count]
    prof[count].style.display = 'block'
  } else {
    prof[count].style.display = 'none'
    count = 0
    qcomm.innerHTML = comments[count]
    qname.innerHTML = names[count]
    qcity.innerHTML = citys[count]
    prof[count].style.display = 'block'
  }
}

stickPrev.onclick = () => {
  if (count > 0) {
    prof[count].style.display = 'none'
    count--
    qcomm.innerHTML = comments[count]
    qname.innerHTML = names[count]
    qcity.innerHTML = citys[count]
    prof[count].style.display = 'block'
  } else {
    prof[count].style.display = 'none'
    count = 3
    qcomm.innerHTML = comments[count]
    qname.innerHTML = names[count]
    qcity.innerHTML = citys[count]
    prof[count].style.display = 'block'
  }
}