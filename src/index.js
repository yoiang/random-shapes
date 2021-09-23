// Based on https://codepen.io/nashvail/pen/wpGgXO by Nash Vail
class RandomShapes extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: "open" });

    this.colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"]
    this.shapesTotal = 50
    this.shapes = []
    this.shapesContainer = undefined
  }

  connectedCallback() {
    if (this.shapesContainer === undefined) {
      this.shapesContainer = document.createElement('div')
      this.appendChild(this.shapesContainer)
    }
    if (this.shapes.length === 0) {

      for (let count = 0; count < this.shapesTotal; count++) {
        let shape = document.createElement("div")
        shape.size = Math.random() < 0.1 ? Math.random() * 10 : Math.random()

        shape.classList.add("shape")
        shape.style.position = 'absolute'
        shape.style.opacity = Math.random() * 0.7 * shape.size
        shape.style.borderRadius = `${Math.random() * 100}%`
        shape.style.background = this.colors[Math.floor(Math.random() * this.colors.length)]
        shape.style.left = `${Math.floor(Math.random() * 100)}vw`
        shape.style.top = `${Math.floor(Math.random() * 100)}vh`
        shape.style.transform = `scale(${Math.random()})`
        shape.style.width = `${shape.size}em`
        shape.style.height = shape.style.width
        
        this.shapes.push(shape)
        this.shapesContainer.appendChild(shape)
      }
    }

    this.shapes.forEach((shape, i, ra) => {
      let additionFrameChance = 0.5
      const keyFrames = ["translate(0, 0)"]
      while(keyFrames.length < 2 || Math.random() < additionFrameChance) {
        keyFrames.push(
          `translate(${Math.random() * (i % 2 === 0 ? -11 : 11)}rem, ${Math.random() * 12}rem)`
        )
        additionFrameChance *= 0.75
      }
      let anim = shape.animate(keyFrames.map((translate) => {
        return {
          transform: translate
        }
      }),
        {
          duration: (Math.random() + 1) * (2000 * shape.size),
          direction: Math.random() > 0.5 ? "alternate" : "alternate-reverse",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
    });
    // this.shadowRoot.appendChild(template.content.cloneNode(true));
    // this.shadowRoot.getElementById("inc").onclick = () => this.inc();
    // this.shadowRoot.getElementById("dec").onclick = () => this.dec();
    this.update();
  }

  update() {

    // requestAnimationFrame(this.update.bind(this))
  }
}

customElements.define("random-shapes", RandomShapes);
