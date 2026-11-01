const produits = [
    { id: 1 , Nom: 'Clavier', Categorie: 'Accessoires', Prix :0 , Stock:5 },
    { id: 2 , Nom: 'Souris', Categorie: 'Accessoires', Prix :0 , Stock:8 },
    { id: 3 , Nom: 'Écran', Categorie: 'Informatique', Prix:0 , Stock:0 },
    { id: 4 , Nom: 'Casque', Categorie: 'Accessoires', Prix :0 , Stock:3 }
];



console.log("CATALOGUE DES PRODUITS");

for(const produit of produits ){
    console.log(produit.Nom + " : " + produit.Prix + " MAD");
}



const produitsDisponibles = produits.filter((produit) => {
    return produit.Stock > 0;
});

console.log(produitsDisponibles);
console.log("Nombre de produits disponibles : " + produitsDisponibles.length);




const valeurStock = produits.reduce(function(total,produit) {
    
    return total + (produit.Prix * produit.Stock);
}, 0);

console.log("Valeur totale du stock : " + valeurStock + " MAD");




function trouverMoinsCher(produitsDisponibles) {
    if (produitsDisponibles.length === 0) {
      return null;
}
    return produitsDisponibles.reduce((moinsCher, produit) => {
        if (produit.Prix < moinsCher.Prix) {
            return produit;
        } else {
            return moinsCher;
        }
    });
}
const produitMoinsCher = trouverMoinsCher(produitsDisponibles);

if (produitMoinsCher === null) {
    console.log("Aucun produit disponible.");
} else {
    console.log("Produit le moins cher : " + produitMoinsCher.Nom);
    console.log("Prix : " + produitMoinsCher.Prix + " MAD");
}




const resume = produits.map((produit) => {
    return produit.Nom + " - " + produit.Prix + " MAD - " + produit.Stock + " unités";
});

console.log(resume);



function estValide(produit) {
    return Number.isFinite(produit.Prix) &&
           Number.isFinite(produit.Stock) &&
           produit.Prix >= 0 &&
           produit.Stock >= 0;
}
for (const produit of produits) {
    console.log(produit.Nom + " : " + estValide(produit));
}



