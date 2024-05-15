let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'Domain Hack'];
let domain = [".com", ".net", ".us", ".io"];

let allArrays = [pronoun, adj, noun, domain];

console.log("todo ok");





let generateNameDomain = () => {
    
    let domainName = [];
    
    for (arr of allArrays) {
        //  creando un numero random, teniendo en cuenta la extension del array dado
        let getRandomNumber = () => Math.floor(Math.random() * arr.length);
        let randomNumber = getRandomNumber();

        // verificando si es un "Domain Hack"
        if (arr === noun && randomNumber === 2){
            // eligiendo un item al azar del array "noun"
            let randomNumberChoice = Math.floor(Math.random() * 2);
            let stringName = noun[randomNumberChoice];

            // convirtiendo string a un array
            let arrName = [];
            for (letter of stringName) {
                arrName.push(letter);
            }
            
            //agregando el punto en el nombre
            arrName.splice(-2, 0, '.');

            let finalName = arrName.join("");

            domainName.push(finalName);
            
            break;
        }

        //agregando un elmento a nuestro nombre de dominio
        domainName.push(arr[randomNumber]);
    }

    console.log(domainName.join(""));
    return domainName.join("");
}

generateNameDomain();
