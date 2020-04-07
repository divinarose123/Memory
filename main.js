


const memoryCards = [
    {

        matchPair: 1,
        icon: 'fas fa-bicycle fa-7x'

    },

    {
        matchPair: 1,
        icon: 'fas fa-bicycle fa-7x'
    },

    {
        matchPair: 2,
        icon: 'fas fa-bacon fa-7x'
    },

    {
        matchPair: 2,
        icon: 'fas fa-bacon fa-7x'
    },

    {
        matchPair: 3,
        icon: 'fas fa-dog fa-7x'
    },

    {
        matchPair: 3,
        icon: 'fas fa-dog fa-7x'
    },

    {
        matchPair: 4,
        icon: 'fas fa-gamepad fa-7x'
    },

    {
        matchPair: 4,
        icon: 'fas fa-gamepad fa-7x'
    },

    {
        matchPair: 5,
        icon: 'fas fa-prescription fa-7x'
    },

    {
        matchPair: 5,
        icon: 'fas fa-prescription fa-7x'
    },

    {
        matchPair: 6,
        icon: 'fas fa-american-sign-language-interpreting fa-7x'
    },

    {
        matchPair: 6,
        icon: 'fas fa-american-sign-language-interpreting fa-7x'
    },

    {
        matchPair: 7,
        icon: 'fas fa-camera fa-7x'
    },

    {
        matchPair: 7,
        icon: 'fas fa-camera fa-7x'
    },

    {
        matchPair: 8,
        icon: 'fas fa-music fa-7x'
    },

    {
        matchPair: 8,
        icon: 'fas fa-music fa-7x'
    },

    {
        matchPair: 9,
        icon: 'fas fa-dollar-sign fa-7x'
    },

    {
        matchPair: 9,
        icon: 'fas fa-dollar-sign fa-7x'
    },

]

const str = memoryCards.map(item => {
    return `<div data-id= "${item.matchPair}" class="card">
    <div class="front"></div>
    <div class="back"></div><span class="${item.icon}"></span></div>`
}).join('')
$('.memoryCards').html(str)
let card1
let card2
$('.card').on('click', function () {
    $(this).addClass('active')
    matchPair = $(this).data('id')
    if (card1 === undefined) {
        card1 = $(this)
        timeOut = setTimeout(() => {
            $(this).removeClass('active')
        }, 1000)
    } else {
        if (card2 === undefined) {
            card2 = $(this)
            timeOutAgain = setTimeout(() => {
                $(this).removeClass('active')
            }, 1000)
        }
    } if (card1 === card2) {
        $(this).removeClass('active')
    }

    let shuffle = function shuffleCards(memoryCards) {
        let currentIndex = memoryCards.length
        var temporaryValue
        var randomIndex

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1

            temporaryValue = memoryCards[currentIndex]
            memoryCards[currentIndex] = cards[randomIndex]
            memoryCards[randomIndex] = temporaryValue
        }
        return memoryCards
    }
})