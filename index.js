// В JavaScript'і є 8 типів данних: 7 простих(string, numebr, boolean, undefined, null, symbol, bigint) 
// та 1 складний(object, масиви та функції це теж об'єкти), зокрема масив це коллекція данних - список у квадратних душках([]), 
// а функція це конструкція-обгортка для групування коду який стосується однієї дії 

// цикли це конструкції які ми використовуєм коли нам потрібно кусок кода повторити багато разів

const name = ["Oleg", "Nastya", "Vadym"];
let message = "My friends are: ";

for (let i = 0; name.length > i; i++){
    message = message + name[i] + ", "
}

console.log(message);