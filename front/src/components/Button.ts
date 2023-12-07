type ButtonProps = {
  text?: string;
  onClick: () => void;
  selected?: boolean;
  children?: Node;
  variant?: "primary" | "secondary";
};

// <button
// id="facileBtn"
// class="minecraft-btn"
// onclick="choisirDifficulte('facile')"
// >
// Facile
// </button>

export function Button({
  text,
  onClick,
  selected = false,
  children,
  variant = "primary",
}: ButtonProps) {
  const element = document.createElement("button");
  if (variant === "primary") element.classList.add("minecraft-btn");
  if (selected && variant === "primary") {
    element.classList.add("minecraft-btn-select");
  }
  if (text) {
    element.textContent = text;
  }
  if (children) element.appendChild(children);

  element.addEventListener("click", onClick);

  return element;
}
