let Zahl1 = 0
let Zahl2 = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Zahl1 = randint(0, 50)
    Zahl2 = randint(0, 50)
    basic.showString("" + Zahl1 + "+" + Zahl2)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showString("" + Zahl1 + "+" + Zahl2 + "=" + (Zahl1 + Zahl2))
})
