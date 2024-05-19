const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon',];
const domain = [".com", ".net", ".us", ".io", "domainHack"];


const generateNameDomain = () => {
    
    let domainName = [];

    for (itemPronoun of pronoun){
        for (itemAdj of adj){
            for (itemNoun of noun) {
                for (itemDomain of domain) {
                    if (itemDomain === "domainHack") {
                        let domainHack = itemNoun.slice(0, -2) +"."+itemNoun.slice(-2);
                        domainName.push(itemPronoun+itemAdj+domainHack);    
                    }else {
                        domainName.push(itemPronoun+itemAdj+itemNoun+itemDomain);
                    }
                    
                    
                }
            }
        }
    }

    console.log(domainName);
    
    return domainName;
}

generateNameDomain();
