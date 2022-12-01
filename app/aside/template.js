{
	const aside = document.getElementsByClassName('js__aside')[0]
	if (aside) {
		// consts
		const items = aside.getElementsByClassName('js__item')
		const sub_menus = aside.getElementsByClassName('js__sub-menu')
		const sub_items = aside.getElementsByClassName('js__sub-item')

		//
		// functions
		//

		// treatment active class
		const check_event_target = (elem) => {
			if (event.target === elem) return true
			else return false
		}
		const toogle_or_remove_active = (elem) => {
			if (check_event_target(elem)) elem.classList.toggle('aside--active')
			else elem.classList.remove('aside--active')
		}
		const remove_active = (elem) => {
			elem.classList.remove('aside--active')
		}
		const add_active_for_parent = (elem) => {
			if (elem.parentNode.classList.contains('aside__sub-menu')) {
				elem.parentNode.classList.add('aside--active')
				add_active_for_parent(elem.parentNode)
			}
		}

		// treatment click event
		const new_active = () => {
			;[...sub_items].forEach((item) => {
				remove_active(item)
			})
			;[...sub_menus].forEach((item) => {
				remove_active(item)
			})
			;[...items].forEach((item) => {
				toogle_or_remove_active(item)
			})
		}
		const new_sub_active = () => {
			;[...sub_menus].forEach((item) => {
				remove_active(item)
			})
			;[...sub_items].forEach((item) => {
				toogle_or_remove_active(item)
				if (check_event_target(item)) add_active_for_parent(item)
			})
		}

		// listener
		;[...items].forEach((item) => {
			item.addEventListener('click', new_active)
		})
		;[...sub_items].forEach((item) => {
			item.addEventListener('click', new_sub_active)
		})

		//
		// write_aside_height
		//
		const write_aside_height = () => {
			aside.getElementsByClassName('aside__wrapper')[0].style = `min-height: ${
				aside.getElementsByClassName('aside__wrapper')[0].clientHeight
			}px`
			aside.style = `min-height: ${
				aside.getElementsByClassName('aside__wrapper')[0].clientHeight + 16
			}px`
		}

		const delete_aside_height = () => {
			aside.getElementsByClassName('aside__wrapper')[0].style = ''
			aside.style = ``
		}

		const check_window_size = () => {
			if (document.documentElement.clientWidth < 1000) write_aside_height()
			else delete_aside_height()
		}

		window.addEventListener('load', check_window_size)
		window.addEventListener('resize', check_window_size)
	}
}
