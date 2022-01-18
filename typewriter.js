const sentence = "hello there from lighthouse labs!";

let delay = 0;

for (const char of sentence) {
  delay += 50;

  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
}

const newlineDelay = sentence.length * 50 + 1;
setTimeout(() => {
  process.stdout.write("\n");
}, newlineDelay);
