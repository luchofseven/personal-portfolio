const $hero = document.getElementById("hero")

export default function rotateEffect() {
    function addEffect (e) {
        if (e) {
            const {clientX, clientY} = e
            $hero.style.transition = `none`
            $hero.style.transform = `skew(${clientX/300}deg, ${clientY/300}deg)`
        }
    }
    
    function removeEffect (e) {
        $hero.style.transform = `none`
        $hero.style.transition = `transform 1s ease`
    }

    if((window.matchMedia("(min-width: 1024px)").matches)){
        $hero.addEventListener("mousemove", addEffect)
        $hero.addEventListener("mouseleave", removeEffect)
    } else {
        $hero.removeEventListener("mousemove", addEffect)
        $hero.removeEventListener("mouseleave", removeEffect)
    }
};