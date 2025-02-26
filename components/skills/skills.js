class SkillsComponent extends HTMLElement {
    skills = []

    constructor() {
        super()

        fetch("data/skills.json")
            .then(response => {
                return response.json()
            })
            .then(skills => {
                this.skills = skills.data

                fetch("components/skills/skills.html")
                    .then(response => {
                        return response.text()
                    })
                    .then(html => {
                        const parser = new DOMParser()
                        const doc = parser.parseFromString(html, "text/html")
                        const template = doc.getElementById("skills-template")
                        const content = template.content.getElementById("skills-content")

                        for (let i = 0; i < this.skills.length; i++) {
                            const entryTemplate = doc.getElementById("skill-entry-template")
                            const skill = this.skills[i]

                            entryTemplate.innerHTML = `
                                <div class="skill-entry-container">
                                    <div class="entry-domain">
                                        <strong>${skill.domain}</strong>
                                    </div>
                                    <div class="entry-content">
                                        ${skill.skills.join(", ")}
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

customElements.define("skills-component", SkillsComponent)