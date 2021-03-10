const sentence = "hello there from lighthouse labs";
const typewriter = function(string, delay) {
  for (const char of string) {
      setTimeout(() => {
        process.stdout.write(char); 
      }, delay);
      delay += 50;
    }
    setTimeout(() => {
      process.stdout.write("\n"); 
    }, delay);
};

typewriter(sentence, 0);
