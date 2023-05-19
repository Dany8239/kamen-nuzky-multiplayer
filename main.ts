let Plr2 = 0
let Plr1 = 0
let Plr1Points = 0
let Plr2Points = 0
basic.forever(function () {
    Plr2 = 0
    Plr1 = 0
    if (input.buttonIsPressed(Button.A)) {
        Plr1 = randint(1, 3)
        basic.showString("MAS")
        basic.showString("" + (Plr1Points))
        basic.showString("BODU")
    }
    if (input.buttonIsPressed(Button.B)) {
        Plr2 = randint(1, 3)
        basic.showString("MAS")
        basic.showString("" + (Plr2Points))
        basic.showString("BODU")
    }
    if (Plr1 == 1 && Plr2 == 2) {
        Plr1Points += 1
        basic.showString("Vyhral hrac 1")
    } else if (Plr1 == 1 && Plr2 == 3) {
        Plr2Points += 1
        basic.showString("Vyhral hrac 2")
    } else if (Plr1 == 2 && Plr2 == 3) {
        Plr1Points += 1
        basic.showString("Vyhral hrac 1")
    } else if (Plr1 == 2 && Plr2 == 1) {
        Plr2Points += 1
        basic.showString("Vyhral hrac 2")
    } else if (Plr1 == 3 && Plr2 == 1) {
        Plr1Points += 1
        basic.showString("Vyhral hrac 1")
    } else if (Plr1 == 3 && Plr2 == 2) {
        Plr2Points += 1
        basic.showString("Vyhral hrac 2")
    } else {
        basic.showString("Remiza")
    }
})
