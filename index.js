let createdomain = ()=>{
    let myArray = [];
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let end = ['.com'];
    for (let i = 0; i < pronoun.length; i++) {
         
        for (let j = 0; j < adj.length; j++) {
             
            for (let k = 0; k < noun.length; k++) {
                
                for (let l = 0; l < end.length; l++) {
                    let domain = pronoun[i] + adj[j] + noun[k] + end[l]
                    myArray.push(domain);
                }
            }
        }
    }
    
    console.log(myArray);                


};
createdomain()