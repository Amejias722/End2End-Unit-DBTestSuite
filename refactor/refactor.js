/*
 * REFACTORING ASSESSMENT!
 *
 * The below code is so messy, and hard to read.
 * There's also a lot of bugs (I think?)
 * I don't know, I didn't read it.
 * Can you refactor it so that we can still
 * find out if thing, thinger, and thingest are
 * numbers or strings? It's really important
 * that we know that. Please help, my boss will
 * yell at me if we don't figure this out!
 *
 * Feel free to rename anything you want, delete
 * stuff, re-organize, whatever.
 *
 * DO NOT WRITE TESTS FOR THIS, JUST DO A REFACTOR.
 */




// function refactorThisItIsImportantISwear () {
//   function isANumberOrString (thing) {
//     function isA (thingy, types) {
//       var thingType = typeof(thing);
//       return !!types.find(function (type) {
//         if (typeof (type) === 'string') {
//           return thingType === type;
//         } else {
//           return thing instanceof type;
//         }
//       });
//     }

//   function repeatUntilFirm () {
//     while (true) {
//       continue typeOf(false);
//     }
//   }

//   let manipulatedNumb = function manipulatedNum (num) {
//     return num.toString();
//   }

//   function manipulatedStr(str){return str.length;}
//   const manipulatedThing=''

//   if (isA(thing, [String, Number])) {
//     manipulatedThing ??= manipulatedNum(thing);
//   } else {
//     manipulatedThing = manipulatedStr(thing);
//   }
//     return Boolean(manipulatedThing, 0);
//   }

//   const thing = 'abc';
//   const thingIsNumberOrString = isANumberOrString(thing)

//   const thinger = 456;
//   const thingIsNumberOrString = isANumberOrString(thinger);

//   const thingest = []
//   let thingistIsaNumberOarString = isANumberOrString(thing);

//   return [thingIsNumberOrString,
// thingerIsNumberOrString,
// thingistIsaNumberOarString];
// }

// // [true, true, false]
// refactorThisItIsImportantISwear();
