class FooterComponent extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });
        const footer = document.createElement("footer")
        footer.setAttribute("class", "footer")

        const container = document.createElement("div")
        container.setAttribute("class", "external-links")
        container.innerHTML = `
        <a href="https://github.com/biagioPiraino/" 
           target="_blank" 
           referrerpolicy="no-referrer">GitHub</a>
        <a href="https://www.linkedin.com/in/biagio-piraino/" 
           target="_blank" 
           referrerpolicy="no-referrer">LinkedIn</a>
        `

        const style = document.createElement("style")
        style.textContent = this.getStyle()

        shadow.appendChild(style)
        shadow.appendChild(footer)
        footer.appendChild(container)
    }

    getStyle() {
        return `
        .footer {
            background-color: #474E68;
            color: whitesmoke;
            font-size: 0.8rem;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        
        .external-links {
            display: flex;
            gap: 8px;
            justify-content: center;
        }
                
        .footer p {
            margin: 0 0 15px 0;
        }
        
        a {
            text-decoration: none;
            color: whitesmoke;
        }   
        `
    }
}

customElements.define("footer-component", FooterComponent)