export function routeTo(destination) {
    const main = document.getElementById('main-container')

    switch (destination) {
        case 'curriculum':
            main.innerHTML = `
            <summary-component></summary-component>
            <hr>
            <skills-component></skills-component>
            <hr>
            <curriculum-component></curriculum-component>
            <hr>`
            return
        case 'education':
            main.innerHTML = `
                <education-component></education-component>
                <hr>
                <certifications-component></certifications-component>
                <hr>
                `
            return
    }
}