class FooterComponent extends HTMLElement {
    constructor() {
        super()

        fetch("components/footer/footer.html")
            .then(response => {
                return response.text(0)
            })
            .then(html => {
                const parser = new DOMParser()
                const doc = parser.parseFromString(html, "text/html")
                const template = doc.getElementById("footer-template")
                const shadow = this.attachShadow({mode: "open"})
                shadow.appendChild(template.content.cloneNode(true))
            })
    }

    connectedCallback() { }
}

customElements.define("footer-component", FooterComponent)