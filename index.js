/* 'continue' keyword jst skips 1 iteration and moves on to the next 1.
*/

let i;

for (i = 0; i < 10; i ++) {

  if (i === 3) {
    // if i is 3, skip the iteration
    continue;

  }

  console.log(i)
}

/* notice the number 3 is not in the outpout, when i become 3 the iteration was skipped because of the continue keyword in the 'if' statement and the code block did not run */