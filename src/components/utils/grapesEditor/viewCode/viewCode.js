import './viewCode.scss'

export default () => {
    // let frame = document.getElementsByClassName("gjs-frame")
    // let doc = frame[0].contentWindow.document

    let modaltitle = document.querySelector('.gjs-mdl-title')
    modaltitle.innerHTML = 'View Code'
    let modalCloseBtn = document.querySelector('.gjs-mdl-btn-close')
    console.log('bbb.p', modalCloseBtn)
    modalCloseBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.25 2.8L11.2 1.75L7 5.95L2.8 1.75L1.75 2.8L5.95 7L1.75 11.2L2.8 12.25L7 8.05L11.2 12.25L12.25 11.2L8.05 7L12.25 2.8Z" fill="#C0C0C0"></path>
        </svg>`
    let viewCodeTitle = document.querySelectorAll('#gjs-cm-title')
    viewCodeTitle[0].onclick = (e) => {
        console.log('aaa.p', 'wow htm title being clicked', viewCodeTitle[1].nextElementSibling)
        viewCodeTitle[0].nextElementSibling.style.opacity = 1
        viewCodeTitle[0].nextElementSibling.style.visibility = 'visible'
        viewCodeTitle[1].nextElementSibling.style.opacity = 0
        viewCodeTitle[1].nextElementSibling.style.visibility = 'hidden'

        viewCodeTitle[0].className = 'active'
        viewCodeTitle[1].className = 'inactive'

        if (getCurrentTheme() == 'dark') {
            // viewCodeTitle[0].style.color = '#FFFFFF'    // active
            // viewCodeTitle[0].style.fontWeight = 600
            // viewCodeTitle[1].style.color = '#C0C0C0'    // inactive
            // viewCodeTitle[1].style.fontWeight = 500
        } else {
            // viewCodeTitle[0].style.color = '#5E5E5E'    //active
            // viewCodeTitle[0].style.fontWeight = 600
            // viewCodeTitle[1].style.color = '#5E5E5E'    //inactive
            // viewCodeTitle[1].style.fontWeight = 500
        }
    }
    viewCodeTitle[1].onclick = (e) => {
        console.log('aaa.p', 'wow htm title being clicked', viewCodeTitle[0].nextElementSibling)
        viewCodeTitle[0].nextElementSibling.style.opacity = 0
        viewCodeTitle[0].nextElementSibling.style.visibility = 'hidden'
        viewCodeTitle[1].nextElementSibling.style.opacity = 1
        viewCodeTitle[1].nextElementSibling.style.visibility = 'visible'

        viewCodeTitle[0].className = 'inactive'
        viewCodeTitle[1].className = 'active'

        // if (getCurrentTheme() == 'dark') {
        //     viewCodeTitle[0].style.color = '#C0C0C0'    // inactive
        //     viewCodeTitle[0].style.fontWeight = 500
        //     viewCodeTitle[1].style.color = '#FFFFFF'    // active
        //     viewCodeTitle[1].style.fontWeight = 600
        // } else {
        //     viewCodeTitle[0].style.color = '#5E5E5E'    //inactive
        //     viewCodeTitle[0].style.fontWeight = 500
        //     viewCodeTitle[1].style.color = '#5E5E5E'    //active
        //     viewCodeTitle[1].style.fontWeight = 600
        // }
    }
}

const getCurrentTheme = () => {
    if (document.querySelector('.theme-dark')) {
        return 'dark'
    } else {
        return 'light'
    }
}