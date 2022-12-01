{
	const padding_value = 20 // summ padding for js__name
	const product_page = document.getElementsByClassName('js__product')[0]
	if (product_page) {
		// DOM-s
		const style_container = document.getElementsByClassName(
			'js__style-container'
		)[0]
		const names = document.getElementsByClassName('js__name')

		// functions
		const get_max_width = () => {
			let rezult = 0
			;[...names].forEach((elem) => {
				rezult = Math.max(rezult, elem.clientWidth)
			})
			return rezult + padding_value
		}

		const set_max_width = () => {
			const max_width = get_max_width()

			style_container.innerHTML = `
				<style>
					.product__param-name{width: ${max_width}px}
					.product__param-value{width: calc(100% - ${max_width}px)}
				</style>
			`
		}

		const delete_max_width = () => {
			style_container.innerHTML = ``
		}

		const check_window_size = () => {
			if (document.documentElement.clientWidth > 768) {
				set_max_width()
			} else {
				delete_max_width()
			}
		}

		// listeners
		window.addEventListener('load', check_window_size)
		window.addEventListener('resize', check_window_size)
	}
}
