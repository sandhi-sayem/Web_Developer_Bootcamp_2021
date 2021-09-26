String.prototype.yell = function () {
    // console.log(this.toUpperCase());
    // return `OMG!!! ${this.toUpperCase()}!!! AGHGHGHGHG!`;
    console.log(`OMG!!! ${this.toUpperCase()}!!! AGHGHGHGHG!`);
}

"i love you".yell();

Array.prototype.pop = function () {
    return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
}

console.log([3, 4, 5].pop());