class EducationComponent extends HTMLElement {
    education_data = []

    constructor() {
        super()

        fetch("data/education.json")
            .then(response => {
                return response.json()
            })
            .then(exp => {
                this.education_data = exp.data

                // populate DOM
                fetch("components/education/education.html")
                    .then(response => {
                        return response.text() // get the main template
                    })
                    .then(html => {
                        const parser = new DOMParser()
                        const doc = parser.parseFromString(html, "text/html")
                        const template = doc.getElementById("education-template")
                        const content = template.content.getElementById("education-content")

                        for(let i = 0; i < this.education_data.length; i++) {
                            const entryTemplate = doc.getElementById("education-entry-template")
                            const exp = this.education_data[i]

                            entryTemplate.innerHTML = `
                                <div class="entry-header" slot="header">
                                    <span>${exp.school}</span>
                                    <span class="header-period">${exp.period}</span>
                                </div>

                                <div class="position-container" slot="position">
                                    <span>${exp.degree}</span>
                                    <span class="position-location">${exp.location}</span>
                                </div>
                            `
                            let summary = `<ul>`

                            for(let i = 0; i < exp.key_points.length; i++) {
                                summary += `<li>${exp.key_points[i].point}</li>`
                            }

                            summary += `</ul>`

                            entryTemplate.innerHTML += summary
                            content.innerHTML += entryTemplate.innerHTML
                        }
                        
                        const shadow = this.attachShadow({mode: "open"})
                        shadow.appendChild(template.content.cloneNode(true))
                        
                    })
            })
    }

    connectedCallback() {

    }
}

customElements.define("education-component", EducationComponent)