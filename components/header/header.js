import { routeTo } from "../../router/router.js"

class HeaderComponent extends HTMLElement {
    constructor() {
        super()
        
        fetch("/components/header/header.html")
            .then(response => {
                return response.text()
            })
            .then(html => {
                const parser = new DOMParser()
                const doc = parser.parseFromString(html, "text/html")
                const template = doc.getElementById("header-template")
                const clone = doc.importNode(template.content, true);
                
                const curriculumNav = clone.querySelector('#curriculum-nav');
                curriculumNav.addEventListener('click', () => routeTo("curriculum"))

                const educationNav = clone.querySelector('#education-nav');
                educationNav.addEventListener('click', () => routeTo("education"))

                const projectsNav = clone.querySelector('#projects-nav');
                projectsNav.addEventListener('click', () => routeTo("projects"))
                
                const contactsNav = clone.querySelector('#contacts-nav');
                contactsNav.addEventListener('click', () => routeTo("contacts"))
                
                const shadow = this.attachShadow({ mode: "open" })
                shadow.appendChild(clone);
            })
    }

    connectedCallback() { }
}

customElements.define("header-component", HeaderComponent)