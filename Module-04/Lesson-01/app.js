class CustomTag extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallbak() {
        const elem = `<div class="container">
        <div class="left">
            <span>Murad</span>
        </div>
        <div class="rigth">
           <h2>Orucov</h2>
        </div>
    </div>`
    this.innerHTML = elem
    }
}

customElements.define("custom-tag",CustomTag)