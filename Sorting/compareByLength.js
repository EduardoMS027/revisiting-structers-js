function compareByLength(strA, strB) {
    return strA.length - strB.length;
}

console.log(['Ravens', 'Steelers', 'Bronws', 'Bengals'].sort(compareByLength));