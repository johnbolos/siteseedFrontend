import './viewCode.scss'

export default () => {
    // let frame = document.getElementsByClassName("gjs-frame")
    // let doc = frame[0].contentWindow.document
    let viewCodeTitle = document.querySelectorAll('#gjs-cm-title')
    console.log(viewCodeTitle, 'aaa.p')
    viewCodeTitle[0].onclick = (e) => {
        console.log('aaa.p', 'wow htm title being clicked', viewCodeTitle[1].nextElementSibling)
        viewCodeTitle[1].nextElementSibling.style.opacity = 0
        viewCodeTitle[1].nextElementSibling.style.visibility = 'hidden'
        viewCodeTitle[0].nextElementSibling.style.opacity = 1
        viewCodeTitle[0].nextElementSibling.style.visibility = 'visible'
    }
    viewCodeTitle[1].onclick = (e) => {
        console.log('aaa.p', 'wow htm title being clicked', viewCodeTitle[0].nextElementSibling)
        viewCodeTitle[0].nextElementSibling.style.opacity = 0
        viewCodeTitle[0].nextElementSibling.style.visibility = 'hidden'
        viewCodeTitle[1].nextElementSibling.style.opacity = 1
        viewCodeTitle[1].nextElementSibling.style.visibility = 'visible'
    }
}