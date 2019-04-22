function pareil(a, b) {
//    if (typeof a === typeof b) {
//        return "le type est le même";
//    } else {
//        return "le type est différent";
//    }
    return(typeof a === typeof b)?"le type est le même":"le type est different";
}
//alert(pareil(prompt("saisie 1"), prompt("saisie 2")));
console.log(pareil(2,3));
console.log(pareil(2,"3"));