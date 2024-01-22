const dropdown = (width) => {
	const dropdown = document.querySelectorAll(".dropdown")
	for (let i = 0; i < dropdown.length; i++) {
		const el = dropdown[i];
		const link = el.querySelector(".dropdown-toggle")
		const menu = el.querySelector(".dropdown-menu")

		if (width < 992) {
			link.classList.add("show")
			link.setAttribute("aria-expanded", "true")
			menu.classList.add("show", "mobil")
		} else {
			link.classList.remove("show")
			link.setAttribute("aria-expanded", "false")
			menu.classList.remove("show", "mobil")
		}

		
	}
	
}


const menu = () => {
	const menuTab = document.querySelector(".header .a-menu").children
	for (let i = 0; i < menuTab.length; i++) {
		const el = menuTab[i];
		el.addEventListener('click', () => {
			const activeMenu = document.querySelector(".header .a-menu .active")
			if (activeMenu) {activeMenu.classList.remove("active")}
			if (el.classList.contains('nav-link')) {
				el.classList.add("active")

			}
		})
	}
}


menu()
window.addEventListener('load', () => {	
	dropdown(window.innerWidth)
})
window.addEventListener('resize', () => {
	dropdown(window.innerWidth)
})