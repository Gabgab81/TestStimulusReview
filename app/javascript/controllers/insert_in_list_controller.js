import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["items", "form"];
  connect() {
    // console.log("Hello from connect of inser in list")
    // console.log("element: ", this.element)
    // console.log("items target: ", this.itemsTarget)
    // console.log("form target: ", this.formTarget)
  }

  send(event){
    event.preventDefault();
    console.log("hello from send of insert in list")

    fetch(this.formTarget.action, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        if (data.inserted_item) {
          this.itemsTarget.insertAdjacentHTML("beforeend", data.inserted_item)
        }
        this.formTarget.outerHTML = data.form
        // console.log(data)
      })
  }

}
