export function routeTo(destination) {
    const main = document.getElementById('main-container')

    switch (destination) {
        case 'curriculum':
            main.innerHTML = `
            <summary-component></summary-component>
            <hr>
            <skills-component></skills-component>
            <hr>
            <curriculum-component></curriculum-component>`
            return
        case 'education':
            main.innerHTML = `
                <education-component></education-component>
                <hr>
                `
            return
        case 'projects':
            main.innerHTML = `<div>projects</div>`
            return
        case 'contacts':
            main.innerHTML = `<div>contacts</div>`
            return
    }
}