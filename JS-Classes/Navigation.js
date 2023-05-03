export default class Navigation {
  constructor() {
    this.navigation = document.querySelector("nav");
  }

  linkStyle(link) {
    if (link.className.includes("links")) {
      link.setAttribute(
        "class",
        "links text-decoration-none fs-6 fw-bold px-2"
      );
    } else {
      link.setAttribute("class", "text-decoration-none fs-6 fw-bold px-1");
    }

    link.parentElement.parentElement
      .querySelectorAll("a")
      .forEach((element) => {
        if (element !== link) {
          if (element.className.includes("links")) {
            element.setAttribute(
              "class",
              "links text-decoration-none text-dark fs-6 fw-bold px-2"
            );
          } else {
            element.setAttribute(
              "class",
              "text-decoration-none text-dark fs-6 fw-bold px-1"
            );
          }
        }
      });
  }
  
}
