

Array.from(document.getElementsByClassName("close__menu")).forEach(function (ele) {
    ele.addEventListener('click', function () {
        document.querySelector(".header_mobi .menu").style.transform = "translate(-100%,0)"
        document.querySelector(".header_mobi .menu").style.transition = "0.5s"
        console.log("a")
    })
})


Array.from(document.getElementsByClassName("btn_collapse")).forEach(function (ele) {
    ele.addEventListener('click', function () {
        document.querySelector(".header_mobi .menu").style.transform = "translate(0,0)"
        console.log("b")
    })
})
