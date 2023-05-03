export default class Navigation {
  constructor() {
    this.navigation = document.querySelector('nav');
  }

  linkStyle(link) {
    if (link.className.includes('links')) {
      link.setAttribute(
        'class',
        'links text-decoration-none fs-6 fw-bold px-2'
      );
    } else {
      link.setAttribute('class', 'text-decoration-none fs-6 fw-bold px-1');
    }

    link.parentElement.parentElement
      .querySelectorAll('a')
      .forEach((element) => {
        if (element !== link) {
          if (element.className.includes('links')) {
            element.setAttribute(
              'class',
              'links text-decoration-none text-dark fs-6 fw-bold px-2'
            );
          } else {
            element.setAttribute(
              'class',
              'text-decoration-none text-dark fs-6 fw-bold px-1'
            );
          }
        }
      });
  }
  sectionChange(section) {
    section.classList.remove('d-none');
    section.parentElement.querySelectorAll('section').forEach((element) => {
      if (element !== section && !element.className.includes('d-none')) {
        element.classList.add('d-none');
      }
    });
  }
sectionShow(linkNav){
  this.linkStyle(linkNav);
  const sectionId = `section-${linkNav.id.slice(4)}`;
  const section = document.getElementById(sectionId);
  this.sectionChange(section);
}

}
