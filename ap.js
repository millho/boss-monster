const heros = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50
    }
]


const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

let slateStatsElem = document.getElementById('slateStats')
let flintStatsElem = document.getElementById('flintStats')
let bossStatsElem = document.getElementById('bossStats')

function drawSlate() {
    let slate = heros.find(hero => hero.name == "Slate Slabrock")
    slateStatsElem.innerHTML = `              
                    <h3>${slate.name}</h3>
                    <h3>HP: ${slate.health}</h3>
                    <h3>Gold:''</h3>
                    <h3>LVL:''</h3>`
    // console.log(slate)
}


function drawFlint() {
    let flint = heros.find(hero => hero.name == "Flint Ironstag")
    flintStatsElem.innerHTML = `              
                    <h3>${flint.name}</h3>
                    <h3>HP: ${flint.health}</h3>
                    <h3>Gold:''</h3>
                    <h3>LVL:''</h3>`
    // console.log(flint)
}

// TODO create a drawHeros function


drawFlint()
drawSlate()

function attack() {

    let damage = 0

    heros.forEach(hero => damage += hero.damage)

    boss.health -= damage

    if (boss.health <= 0) boss.health = 0

    drawBoss(damage)
}

function drawBoss(damage) {
    bossStatsElem.innerHTML = `<h3>health: ${boss.health}</h3>`
}

setInterval(fightBack, 1000)

function fightBack() {

    // trying to make no more fightBack if boss health equals zero

    heros.forEach(hero => {
        hero.health -= boss.damage

        if (hero.health <= 0) { hero.health = 0 }
    })


    drawSlate()
    drawFlint()
}

