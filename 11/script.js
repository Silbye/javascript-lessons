const arr = [1, 5, 7, 9];

function createCounter() {
  let count = 0;

  function counter() {
    return count;
  }
  counter.increment = function () {
    count++;
  };
  counter.decrement = function () {
    count--;
  };

  return counter;
}

console.log(Math.min(...arr));

let counter = createCounter();
console.log(counter());
counter.increment();
counter.increment();
console.log(counter());
counter.decrement();
console.log(counter());

function findElementByClass(currentElement, className) {
  if (currentElement.classList.contains(className)) {
    return currentElement;
  }
  const children = currentElement.children;
  for (let child of children) {
    const found = findElementByClass(child, className);
    if (found) {
      return found;
    }
  }
  return null;
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
