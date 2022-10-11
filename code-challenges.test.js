// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest




// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.



// const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"

describe("codedMessage", () => {
    it("takes in a string and returns a coded message.", () => {
        const secretCodeWord1 = "Lackadaisical";
        expect(codeMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
        const secretCodeWord2 = "Gobbledygook";
        expect(codeMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k");
        const secretCodeWord3 = "Eccentric";
        expect(codeMessage(secretCodeWord3)).toEqual("3cc3ntr1c");
    })
});

//    ReferenceError: codedMessage is not defined



// b) Create the function that makes the test pass.
// codeMessage function will take in a string and returns a coded message
// a = 4
// e = 3
// i = 1
// o = 0
//first i want to spit the string using str.split and then want to MAP THROUGH the values 
const codeMessage = (str) => {
    return str.split("").map((value) => {
        //if 'a' return 4
      if (value === "a" || value === "A") {
        return "4" 
        //else if letter 'e', return 3
      } else if (value === "e" || value === "E") {
        return "3"
        //else if letter = 'i' return num 1
      } else if (value === "i" || value === "I") {
        return "1"
        //else if letter = 'o' return num 0
      } else if (value === "o" || value === "O") {
        return "0"
        //else return the original letter
      } else {
        return value
      }
    }).join("")
    }

    // added || value === AEIO in caps...
    // Pass






// // --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// // a) Create a test with expects statement using the variable provided.



describe("returnLetter", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    
    const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        expect(returnLetter(letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(returnLetter(letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

  //     ReferenceError: returnLetter is not defined


// // b) Create the function that makes the test pass.

// const returnLetter
const returnLetter = (array, letter) =>{
  // new array will equal original array, we will use .filter to iterate through the array
  let newArray = array.filter((word) => {
    //return the words that contain (includes) specific letter. 
    //return word().include(letter) ==> originally didnt work because i didnt include .toLowerCase
  return word.toLowerCase().includes(letter)
  })
  // return new array that includes letter
  return newArray
}

// pass

// // --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// // a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    // Expected output: true
    it("Takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
      expect(fullHouse(hand4)).toEqual(true)
    })
    })

    // ReferenceError: fullHouse is not defined 

// // b) Create the function that makes the test pass}

// function = [1,2,3,4,5]
//if index zero === index 1 and 2, and index 3 === ndex 4
// else return false



//i want my function to take in an array of numbers
const fullHouse = (array) => {
  //i then want to iterate through the array of numbers and want to sort them. .sort sorts arrays alphabetically and numbers lleast to greatest
  let cardArray = array.sort()
  // if [0] === [2] then [0] === [1]
  // if 3 number are identical AND 2 numbers are identical, it is a fullHouse ==> return true 
  if(cardArray[0] === cardArray[2] && cardArray[3] === cardArray[4]){
      return true
  // then do the opposite, if [0] === [1] and [2] === [4] then return true
  } else if (cardArray[0] === cardArray[1] && cardArray[2] === cardArray[4]){
      
      return true
  } else {
      return false
  }
}



  