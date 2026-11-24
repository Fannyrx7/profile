import {AdminPage} from "./pages/admin.js"
import {HomePage} from "./pages/home.js"

const routes = {
    "/": HomePage,
    "/admin": AdminPage,
}

function render() {
  const path = location.hash.slice(1) || "/"
  const page = routes[path] || HomePage
  document.getElementById("#app").innerHTML = page()
}
window.addEventListener("hashchange", render)
render();