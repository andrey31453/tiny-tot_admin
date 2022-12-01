{
	const m_menu_btn = document.getElementsByClassName('js__m-menu-btn')[0]
	if (m_menu_btn) {
		// DOM-s
		const body = document.getElementsByTagName('body')[0]

		//
		// function
		//

		// check m-menu open/close
		const check_m_menu_status = () => {
			if (!body.classList.contains('m-menu--active')) return true
			return false
		}

		// if close m-menu
		const check_click_param = (event) => {
			if (event.target.dataset.close && !event.target.closest('.m-menu-btn'))
				return true
			return false
		}

		// check for close m menu
		const m_menu_listener = () => {
			if (check_click_param(event)) m_menu_close()
		}

		// open m-menu
		const m_menu_open = () => {
			body.classList.add('m-menu--active')
			disable_scroll()
			window.addEventListener('click', m_menu_listener)
			window.addEventListener('resize', m_menu_close)
		}

		// close m-menu
		const m_menu_close = () => {
			body.classList.remove('m-menu--active')
			enable_scroll()
			window.removeEventListener('click', m_menu_listener)
		}

		// m_menu_toggle
		const m_menu_toggle = () => {
			if (check_m_menu_status()) {
				m_menu_open()
			} else {
				m_menu_close()
			}
		}

		// listenet
		m_menu_btn.addEventListener('click', m_menu_toggle)
	}
}
