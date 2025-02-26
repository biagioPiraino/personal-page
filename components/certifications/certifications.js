class CertificationsComponent extends HTMLElement {
    certifications = []

    constructor() {
        super()

        fetch("data/certifications.json")
            .then(response => {
                return response.json()
            })
            .then(certifications => {
                this.certifications = certifications.data

                fetch("components/certifications/certifications.html")
                    .then(response => {
                        return response.text()
                    })
                    .then(html => {
                        const parser = new DOMParser()
                        const doc = parser.parseFromString(html, "text/html")
                        const template = doc.getElementById("certifications-template")
                        const content = template.content.getElementById("certifications-content")

                        for (let i = 0; i < this.certifications.length; i++) {
                            const entryTemplate = doc.getElementById("certification-entry-template")
                            const certification = this.certifications[i]

                            entryTemplate.innerHTML = `
                                <div class="certification-entry-container">
                                    <div class="entry-domain">
                                        <strong>${certification.year}</strong>
                                    </div>
                                    <div class="entry-content">
                                        <a target='_blank' referrerpolicy='no-referrer' href='${certification.link}'>
                                        ${certification.name}, ${certification.score}
                                        </a>
                                    </div>
                                </div>
                            `
                            content.innerHTML += entryTemplate.innerHTML
                        }

                        const shadow = this.attachShadow({ mode: "open" })
                        shadow.appendChild(template.content.cloneNode(true));
                    })
            })
    }

    connectedCallback() { }
}

customElements.define("certifications-component", CertificationsComponent)