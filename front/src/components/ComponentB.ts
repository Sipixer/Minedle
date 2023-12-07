export function ComponentB() {
  let i = 0;
  const element = document.createElement("button");
  element.textContent = `Cliqué ${i} fois`;
  element.addEventListener("click", () => {
    i++;
    element.textContent = `Cliqué ${i} fois`;
  });

  return element;
}
