const allMusic = ['aloneAgain', 'eve', 'iHateEverythingAboutYou', 'soCalledLife', 'whereDidItGo', 'zombie', 
'boulevardOfBrokenDreams', 'monster', 'theVengefulOne', 'decadence', 'abyss', 'lastResort','feelInv', 
'legendary', 'numb', 'myDemons', 'oneX', 'bundy', 'everglow', 'inTheEnd', 'painkiller', 'centuries', 'riot', 
'ungrateful', 'fourthOfJuly', 'panzerkampf', 'toHellAndBack', 'antisocialist', 'notListening', 'realYou', 'wakeMeUp', 
'vultures', 'stronger', 'losingYou', 'bringingItDown', 'bringMeToLife', 'myImmortal', 'faint', 'savior', 'comatose', 'rebirthing', 
'iWontGiveIn', '21guns', 'theHighRoad', 'slowChemical', 'pain', 'aloneInARoom', 'undead', 'findMyself', 'backToTheEarth']
const nameAndGroup = [
{group: 'Asking Alexandria', name: 'Alone Again', time: 229, color: "rgb(121, 112, 248)"}, 
{group: 'Asking Alexandria', name: 'Eve', time: 239, color: "rgb(121, 112, 248)"},
{group: 'Three days Grace', name: 'I Hate Everything About You', time: 231, color: "rgb(184, 184, 189)"},
{group: 'Three days Grace', name: 'So Called Life', time: 206, color: "rgb(71, 71, 243)"},
{group: 'Asking Alexandria', name: 'Where Did It Go?', time: 194, color: "rgb(245, 34, 34)"},
{group: 'The cranberries', name: 'Zombie', time: 306, color: "rgb(202, 202, 202)"},
{group: 'Green Day', name: 'Boulevard of broken dreams', time: 259, color: "rgb(171, 51, 51)"},
{group: 'Skillet', name: 'Monster', time: 178, color: "rgb(245, 34, 34)"},
{group: 'Disturbed', name: 'The Vengeful One', time: 252, color: "rgb(194, 99, 52)"},
{group: 'Disturbed', name: 'Decadence', time: 205, color: "rgb(184, 184, 189)"},
{group: 'Three days Grace', name: 'The Abyss', time: 250, color: "rgb(245, 34, 34)"},
{group: 'Papa Roach', name: 'Last Resort', time: 200, color: "rgb(247, 137, 47)"},
{group: 'Skillet', name: 'Feel Invincible', time: 230, color: "rgb(86, 63, 235)"},
{group: 'Skillet', name: 'Legendary', time: 245, color: "rgb(167, 181, 175)"},
{group: 'Linkin Park', name: 'Numb', time: 186, color: "rgb(28, 76, 173)"},
{group: 'Starset', name: 'My Demons', time: 288, color: "rgb(0, 151, 252)"},
{group: 'Three Days Grace', name: 'One-X', time: 286, color: "rgb(184, 184, 189)"},
{group: 'Animal Alpha', name: 'Bundy', time: 226, color: "rgb(194, 83, 83)"},
{group: 'Starset', name: 'Everglow', time: 476, color: "rgb(0, 13, 255)"},
{group: 'Linkin Park', name: 'In The End', time: 216, color: "rgb(171, 88, 0)"},
{group: 'Three days Grace', name: 'Painkiller', time: 178, color: "rgb(184, 184, 189)"},
{group: 'Fall Out Boy', name: 'Centuries', time: 231, color: "rgb(201, 201, 201)"},
{group: 'Three Days Grace', name: 'Riot', time: 208, color: "rgb(212, 40, 40)"},
{group: 'Escape the Fate', name: 'Ungrateful', time: 204, color: "rgb(212, 40, 40)"},
{group: 'Fall Out Boy', name: 'Fourth Of July', time: 224, color: "rgb(201, 201, 201)"},
{group: 'Sabaton', name: 'Panzerkampf', time: 316, color: "rgb(242, 210, 0)"},
{group: 'Sabaton', name: 'To Hell And Back', time: 207, color: "rgb(0, 132, 255)"},
{group: 'Asking Alexandria', name: 'Antisocialist', time: 216, color: "rgb(194, 99, 52)"},
{group: 'Papa Roach', name: 'Not Listening', time: 190, color: "rgb(217, 182, 182)"},
{group: 'Three days Grace', name: 'The Real You', time: 236, color: "rgb(219, 219, 219)"},
{group: 'Green Day', name: 'Wake Me Up When September Ends', time: 285, color: "rgb(219, 219, 219)"},
{group: 'Asking Alexandria', name: 'Vultures', time: 208, color: "rgb(245, 34, 34)"},
{group: 'Dead by April', name: 'Stronger', time: 238, color: "rgb(245, 34, 34)"},
{group: 'Dead by April', name: 'Losing You', time: 238, color: "rgb(184, 184, 189)"},
{group: 'Starset', name: 'Bringing It Down', time: 298, color: "rgb(39, 137, 194)"},
{group: 'Evanescence', name: 'Bring Me To Life', time: 237, color: "rgb(23, 154, 230)"},
{group: 'Evanescence', name: 'My Immortal', time: 273, color: "rgb(212, 175, 42)"},
{group: 'Linkin Park', name: 'Faint', time: 162, color: "rgb(194, 83, 83)"},
{group: 'Skillet', name: 'Savior', time: 274, color: "rgb(255, 213, 0)"},
{group: 'Skillet', name: 'Comatose', time: 230, color: "rgb(167, 181, 175)"},
{group: 'Skillet', name: 'Rebirthing', time: 233, color: "rgb(167, 181, 175)"},
{group: 'Asking Alexandria', name: 'I Won\'t Give In', time: 229, color: "rgb(242, 242, 242)"},
{group: 'Green Day', name: '21 Guns', time: 321, color: "rgb(255, 56, 56)"},
{group: 'Three days Grace', name: 'The High Road', time: 194, color: "rgb(255, 179, 179)"},
{group: 'Finger Eleven', name: 'Slow Chemical', time: 222, color: "rgb(255, 115, 0)"},
{group: 'Three Days Grace', name: 'Pain', time: 203, color: "rgb(184, 184, 189)"},
{group: 'Asking Alexandria', name: 'Alone In A Room', time: 246, color: "rgb(201, 46, 46)"},
{group: 'Hollywood Undead', name: 'Undead', time: 265, color: "rgb(175, 163, 255)"},
{group: 'Asking Alexandria', name: 'Find Myself', time: 280, color: "rgb(121, 112, 248)"},
{group: 'Starset', name: 'Back To The Earth', time: 254, color: "rgb(163, 246, 255)"}]
const rangeInput = document.querySelector('.progress-bar')
const playButton = document.querySelector('.player-button')
const nextButton = document.querySelector('.next-song')
const prevButton = document.querySelector('.prev-song')
const valueButton = document.querySelector('.vi')
let audio = new Audio()
let msNum = 0
audio.src = './assets/audio/' + allMusic[msNum] + '.mp3'
const rangeValue = document.querySelector('.volume-bar')
let numValue = 1
const numberMusic = document.querySelector('.number')
numberMusic.innerHTML = '1 / ' + allMusic.length

if(localStorage.getItem('number') == null) {
    localStorage.setItem('number', 0)
}

let tempMusic = localStorage.getItem('number')
msNum = Number(localStorage.getItem('number'))

let allTime = 0, allTimeStr = ''
nameAndGroup.forEach((n) => {
    allTime += n.time
})
if(Math.trunc(allTime / 3600) < 10) {
    allTimeStr += '0'
}
allTimeStr += Math.trunc(allTime / 3600) + ':'
if(Math.trunc(allTime % 3600 / 60) < 10) {
    allTimeStr += '0'
}
allTimeStr += Math.trunc(allTime % 3600 / 60) + ':'
if(allTime % 60 < 10) {
    allTimeStr += '0'
}
allTimeStr += allTime % 60
document.querySelector('.duration').innerHTML = "Duration: " + allTimeStr

while(tempMusic != 0) {
    tempMusic--
    audio.src = './assets/audio/' + allMusic[msNum] + '.mp3'
    document.querySelector('main').style.backgroundImage = 'url(./assets/img/' + allMusic[msNum] + '.png)'
    document.querySelector('.img-audio').style.backgroundImage = 'url(./assets/img/' + allMusic[msNum] + '.png)'
    document.querySelector('.music-name').innerHTML = nameAndGroup[msNum].name
    document.querySelector('.music-name').style.color = nameAndGroup[msNum].color
    document.querySelector('.full-time').style.color = nameAndGroup[msNum].color
    document.querySelector('.this-time').style.color = nameAndGroup[msNum].color
    document.querySelector('.duration').style.color = nameAndGroup[msNum].color
    document.querySelector('.group').innerHTML = nameAndGroup[msNum].group
    let time = Math.floor(nameAndGroup[msNum].time / 60) + ":"
    if(nameAndGroup[msNum].time % 60 < 10) {
        time += '0'
    }
    time += nameAndGroup[msNum].time % 60
    document.querySelector('.full-time').innerHTML = time
    rangeInput.max = nameAndGroup[msNum].time
    rangeInput.value = 0
    if(tempMusic == 0) {
        numberMusic.innerHTML = Number(msNum) + 1 + ' / ' + allMusic.length
        numberMusic.style.color = nameAndGroup[msNum].color
    }
}

localStorage.setItem('number', msNum)

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = []
    }
    let list = preloadImages.list
    for (let i = 0; i < array.length; i++) {
        let img = new Image()
        img.onload = function() {
            let index = list.indexOf(this)
            if (index !== -1) {
                list.splice(index, 1)
            }
        }
        list.push(img)
        img.src = array[i]
    }
}

preloadImages(allMusic.map((f) => {
    return './assets/img/' + f + '.png'
}))

preloadImages(['./assets/svg/volume-off.png', './assets/svg/pause.png'])

rangeValue.addEventListener('input', () => {
    numValue = rangeValue.value / 100
    audio.volume = numValue
    document.querySelector('.volume-num').innerHTML = rangeValue.value
    const max = rangeValue.max
    const val = rangeValue.value
    
    rangeValue.style.backgroundSize = val * 100 / max + '% 100%'
    if(numValue === 0) {
        valueButton.classList.add('volume-icon-none')
        valueButton.classList.remove('volume-icon')
    } else {
        valueButton.classList.add('volume-icon')
        valueButton.classList.remove('volume-icon-none')
    }
})

valueButton.addEventListener('click', () => {
    valueButton.classList.toggle('volume-icon-none')
    valueButton.classList.toggle('volume-icon')
    if(valueButton.classList.contains('volume-icon-none')) {
        audio.volume = 0
        rangeValue.value = 0
        const max = rangeValue.max
        const val = rangeValue.value
        rangeValue.style.backgroundSize = val * 100 / max + '% 100%'
        document.querySelector('.volume-num').innerHTML = 0
    } else {
        if(numValue === 0) {
            numValue += 0.01    
        }
        rangeValue.value = Math.trunc(numValue * 100)
        const max = rangeValue.max
        const val = rangeValue.value
        rangeValue.style.backgroundSize = val * 100 / max + '% 100%'
        audio.volume = numValue
        document.querySelector('.volume-num').innerHTML = Math.trunc(numValue * 100)
    }
})

function redLine() {
    const max = rangeInput.max
    const val = rangeInput.value
    
    rangeInput.style.backgroundSize = val * 100 / max + '% 100%'
    let time = Math.floor(val / 60) + ":"
    if(val % 60 < 10) {
        time += '0'
    }
    time += val % 60
    document.querySelector('.this-time').innerHTML = time
}

rangeInput.addEventListener('input', () => {
    const val = rangeInput.value
    redLine()
    audio.currentTime = val
})

function playNextAuto() {
    if(Number(rangeInput.value) == nameAndGroup[msNum].time && playButton.classList.contains('player-button-active')) {
        let event = new Event('click')
        nextButton.dispatchEvent(event)
    }
}

setInterval(playNextAuto, 1000);

playButton.addEventListener('click', () => {
    if(playButton.classList.contains('player-button')) {
        playButton.classList.remove('player-button') 
        playButton.classList.add('player-button-active')
        audio.play()
        setInterval(() => {
            rangeInput.value = audio.currentTime
            redLine();
        }, 50);
    } else {
        playButton.classList.add('player-button') 
        playButton.classList.remove('player-button-active')
        audio.pause()
    }
})

nextButton.addEventListener('click', () => {
    msNum = (msNum + 1) % allMusic.length
    audio.src = './assets/audio/' + allMusic[msNum] + '.mp3'
    document.querySelector('main').style.backgroundImage = 'url(./assets/img/' + allMusic[msNum] + '.png)'
    document.querySelector('.img-audio').style.backgroundImage = 'url(./assets/img/' + allMusic[msNum] + '.png)'
    document.querySelector('.music-name').innerHTML = nameAndGroup[msNum].name
    document.querySelector('.music-name').style.color = nameAndGroup[msNum].color
    document.querySelector('.full-time').style.color = nameAndGroup[msNum].color
    document.querySelector('.this-time').style.color = nameAndGroup[msNum].color
    document.querySelector('.duration').style.color = nameAndGroup[msNum].color
    document.querySelector('.group').innerHTML = nameAndGroup[msNum].group
    let time = Math.floor(nameAndGroup[msNum].time / 60) + ":"
    if(nameAndGroup[msNum].time % 60 < 10) {
        time += '0'
    }
    time += nameAndGroup[msNum].time % 60
    document.querySelector('.full-time').innerHTML = time
    rangeInput.max = nameAndGroup[msNum].time
    rangeInput.value = 0
    redLine()
    if(playButton.classList.contains('player-button-active')) {
        audio.currentTime = 0
        audio.play()
    }
    numberMusic.innerHTML = msNum + 1 + ' / ' + allMusic.length
    numberMusic.style.color = nameAndGroup[msNum].color
    localStorage.removeItem('number')
    localStorage.setItem('number', msNum)
})

prevButton.addEventListener('click', () => {
    msNum = (msNum - 1)
    if(msNum === -1) {
        msNum += allMusic.length
    }
    audio.src = './assets/audio/' + allMusic[msNum] + '.mp3'
    document.querySelector('main').style.backgroundImage = 'url(./assets/img/' + allMusic[msNum] + '.png)'
    document.querySelector('.img-audio').style.backgroundImage = 'url(./assets/img/' + allMusic[msNum] + '.png)'
    document.querySelector('.music-name').innerHTML = nameAndGroup[msNum].name
    document.querySelector('.music-name').style.color = nameAndGroup[msNum].color
    document.querySelector('.full-time').style.color = nameAndGroup[msNum].color
    document.querySelector('.this-time').style.color = nameAndGroup[msNum].color
    document.querySelector('.group').innerHTML = nameAndGroup[msNum].group
    document.querySelector('.duration').style.color = nameAndGroup[msNum].color
    let time = Math.floor(nameAndGroup[msNum].time / 60) + ":"
    if(nameAndGroup[msNum].time % 60 < 10) {
        time += '0'
    }
    time += nameAndGroup[msNum].time % 60
    document.querySelector('.full-time').innerHTML = time
    rangeInput.max = nameAndGroup[msNum].time
    rangeInput.value = 0
    redLine()
    if(playButton.classList.contains('player-button-active')) {
        audio.currentTime = 0
        audio.play()
    }
    numberMusic.innerHTML = msNum + 1 + ' / ' + allMusic.length
    numberMusic.style.color = nameAndGroup[msNum].color
    localStorage.removeItem('number')
    localStorage.setItem('number', msNum)
})