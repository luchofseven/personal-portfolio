const $hero = document.getElementById("hero")

export default function rotateEffect() {
    $hero.addEventListener("mousemove", e => {
        if (e) {
            const {clientX, clientY} = e
            $hero.style.transition = `none`
            $hero.style.transform = `skew(${clientX/300}deg, ${clientY/300}deg)`
        }
    })

    $hero.addEventListener("mouseleave", () => {
        $hero.style.transform = `none`
        $hero.style.transition = `transform 1s ease`
    })
};