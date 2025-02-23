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
                const shadow = this.attachShadow({ mode: "open" })
                shadow.appendChild(template.content.cloneNode(true));
            })
    }

    connectedCallback() { }
}

customElements.define("header-component", HeaderComponent)