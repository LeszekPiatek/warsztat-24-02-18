//deklaracja funkcji, zadeklarowanie

function hello(name, numberOfLogs){
    for(var i = numberOfLogs; i > 0; i--) {
        console.log("Hello " + name + "!")
    }
}

//wywołanie funkcji, call, invocation

hello("Mateusz", 14)
hello("Ala", 4)


