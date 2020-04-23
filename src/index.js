import x from './x'
import css from './x.scss'
import './y.less'
import './z.styl'
console.log('变量x:',x)
console.log(`${css}`)


import picCSS from './imgs/1.png'
console.log(`pic:${picCSS}`)
const div = document.getElementById('app1')


div.innerHTML = `
<img src="${picCSS}">
`

const button = document.createElement('button')
button.innerText = '懒人'
button.onclick = ()=>{
    const promise = import('./lazy.js')
    console.log(promise)
    promise.then(
        (module)=>{
        const fn = module.default
            fn()
    },
        ()=>{})
}
div.appendChild(button)