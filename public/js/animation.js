window.onload = () =>{
    animateCSS('.treasure', 'bounce')
}

function animateCSS(element, animationName) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName, 'delay-1s')

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        animateCSS('.treasure', randomAnimeAction(animationName))
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

function randomAnimeAction(animationName) {
    const animeActions = ['rubberBand', 'swing', 'shake', 'bounce']
    const filteringAnimeActions = animeActions.filter(action => action != animationName)
    const randomNum = Math.floor( Math.random() * filteringAnimeActions.length )
    return filteringAnimeActions[randomNum]
}