export function getTypeColor(type) {
  switch (type) {
    case "normal":
      return "#444444"; // сірий
    case "poison":
      return "#8D2D8D"; // фіолетовий
    case "fire":
      return "#e4554b"; // червоний
    case "ground":
      return "#8b4513"; // коричневий
    case "electric":
      return "#ebc538"; // жовтий
    case "grass":
      return "#83C343"; // зелений
    default:
      return "#8D8D2D"; // за замовчуванням
  }
}

export function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
