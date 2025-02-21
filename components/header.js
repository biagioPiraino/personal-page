class HeaderComponent extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });
        const container = document.createElement("div")
        container.setAttribute("class", "inner-container")

        const headerTitle = document.createElement("h2")
        headerTitle.innerText = "Biagio Piraino"

        const navigation = document.createElement("ul")
        const about = document.createElement("li")
        about.innerHTML = `<a href="/about.html">Curriculum</a>`

        const projects = document.createElement("li")
        projects.innerHTML = `<a href="/projects.html">Projects</a>`
        
        const contacts = document.createElement("li")
        contacts.innerHTML = `<a href="/contacts.html">Contacts</a>`

        const style = document.createElement("style")
        style.textContent = this.getStyle()

        navigation.appendChild(about)
        navigation.appendChild(projects)
        navigation.appendChild(contacts)

        shadow.appendChild(style)
        shadow.appendChild(container)

        container.appendChild(headerTitle)
        container.appendChild(navigation)
    }

    getStyle() {
        return `
        .inner-container {
            display: flex;
            align-items: center;
        }
          
        ul {
            list-style-type: none;
            display: flex;
            gap: 24px;
        }
        
        a {
            text-decoration: none;
            color: whitesmoke;
        }
        `
    }
}

customElements.define("header-component", HeaderComponent)