
// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addToZero(arr) {
    let doesAddZero = false
    let arrCopy = [...arr]

    for (i in arr) {
        arrCopy.splice(i, 1)
        arrCopy.forEach(value => {
            if (value + arr[i] === 0) {
                doesAddZero = true
            }
        })
        arrCopy = [...arr]
    }
    return doesAddZero
}

console.log(addToZero([]));
// // -> False

console.log(addToZero([1]));
// // -> False

console.log(addToZero([1, 2, 3]));
// // -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True

// The time complexity of addToZero is O(n^2)
// The space complexity of addToZero is O(n)

/////////////////////////////////////////////////

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(str) {
    const arrOfStr = Array.from(str)
    const set = new Set(arrOfStr)
    if (arrOfStr.length === set.size) {
        return true
    } else {
        return false
    }
}


console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False

// The time complexity of hasUniqueChars is O(1)
// The space complexity of hasUniqueChars is O(n)


///////////////////////////////////////////////////


// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(str) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const arrOfStr = Array.from(str)
    arrOfStr.forEach(letter => {
        if (alphabet.includes(letter)) {
            const indexOfLetter = alphabet.findIndex(match => match === letter)
            alphabet.splice(indexOfLetter, 1)
        }
    })
    if (alphabet.length === 0) {
        return true
    } else {
        return false
    }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

// The time complexity of isPangram is O(n)
// The space complexity of isPangram is O(1)

////////////////////////////////////////////////////

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(arr) {

    let longestLength = 0

    arr.forEach(word => {
        const arrOfWord = Array.from(word)
        if (longestLength < arrOfWord.length) {
            longestLength = arrOfWord.length
        }
    })
    return longestLength
}

console.log(findLongestWord(["hi", "hello", "DevMountain", "coding", "javascript"]))
console.log(findLongestWord(["hi", "hello"]));
// -> 5

// The time complexity of findLongestWord is O(n)
// The space complexity of findLongestWord is O(n)