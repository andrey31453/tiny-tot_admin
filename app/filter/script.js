{
	const filter = document.getElementsByClassName('js__filter')[0]
	if (filter) {
		//
		// consts
		//

		// DOM-s
		const availabilitys = filter.getElementsByClassName('js__availability')
		const search = filter.getElementsByClassName('js__search')[0]

		const btn = filter.getElementsByClassName('js__btn')[0]
		const brand = filter.getElementsByClassName('js__brand')[0]
		const brand_close = filter.getElementsByClassName('js__brand-close')[0]
		const brand_vars = filter.getElementsByClassName('js__brand-var')

		const brand_m = filter.getElementsByClassName('js__brand')[1]

		// vars
		let url_params = new URLSearchParams(window.location.search)

		//
		// functions
		//

		// page starting param upgrade
		const change_search_condition = () => {
			search.value = url_params.get('name')
		}
		const change_brand_condition = () => {
			brand.textContent = url_params.get('brand')
			brand_close.classList.add('filter__brand--active')

			brand_m.textContent = url_params.get('brand')
			brand_close_m.classList.add('filter__brand--active')
		}
		const change_availability_condition = () => {
			;[...availabilitys].forEach((btn) => {
				btn.classList.add('filter--availability')
			})
		}

		const starting_param__upgrade = () => {
			if (url_params.has('name')) change_search_condition()
			if (url_params.has('brand')) change_brand_condition()
			if (url_params.has('available')) change_availability_condition()
		}

		// treatment click for btn-s
		const change_url = () => {
			window.location.search = url_params
		}
		const check_search_status = () => {
			if (
				(event.target === btn || event.key === 'Enter') &&
				(search.value !== '' || url_params.has('name'))
			)
				return true
			return false
		}
		const search_products = () => {
			if (check_search_status()) {
				search.value === ''
					? url_params.delete('name')
					: url_params.set('name', `${search.value}`)
				change_url()
			}
		}
		const change_brand_var = (brand_var) => {
			url_params.set('brand', brand_var)
			change_url()
		}
		const delete_brand_var = () => {
			url_params.delete('brand')
			change_url()
		}
		const change_availability_status = () => {
			event.stopPropagation()
			url_params.has('available')
				? url_params.delete('available')
				: url_params.set('available', true)
			change_url()
		}

		//
		// listeners
		//

		// click for search
		btn.addEventListener('click', search_products)
		search.addEventListener('keydown', search_products)
		// click for brands
		;[...brand_vars].forEach((brand_var) =>
			brand_var.addEventListener('click', () => {
				change_brand_var(brand_var.textContent)
			})
		)
		brand_close.addEventListener('click', delete_brand_var)
		// click for availability
		;[...availabilitys].forEach((btn) =>
			btn.addEventListener('click', change_availability_status)
		)

		// page load treatment
		window.addEventListener('load', starting_param__upgrade)
	}
}
