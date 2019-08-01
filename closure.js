// http://teknosains.com/javascript/apasih-sebenarnya-closure-di-javascript-masuk-biar-faham

function tambahAwal( nilai ) {
    return function( pertama, kedua ) {
        return nilai + pertama + kedua;
    }
}

var tambahDua = tambahAwal(2);

console.log(tambahDua(3,5))