class CurriculumComponent extends HTMLElement {
    experiences = []

    constructor() {
        super()

        fetch("data/experience.json")
            .then(response => {
                return response.json()
            })
            .then(exp => {
                // gather experience data
                this.experiences = exp.data

                // populate DOM
                fetch("components/curriculum/curriculum.html")
                    .then(response => {
                        return response.text() // get the main template
                    })
                    .then(html => {
                        const parser = new DOMParser()
                        const doc = parser.parseFromString(html, "text/html")
                        const template = doc.getElementById("curriculum-template")
                        
                        const content = template.content.getElementById("curriculum-content")

                        for(let i = 0; i < this.experiences.length; i++) {
                            const entryTemplate = doc.getElementById("curriculum-entry-template")
                            const exp = this.experiences[i]

                            entryTemplate.innerHTML = `
                                <div class="entry-header" slot="header">
                                    <span>${exp.company_name}</span>
                                    <span class="header-period">${exp.period}</span>
                                </div>

                                <div class="position-container" slot="position">
                                    <span>${exp.position}</span>
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

customElements.define("curriculum-component", CurriculumComponent)