{
	const product = document.getElementsByClassName('js__products')[0]
	if (product) {
		// DOM-s
		const product_trs =
			product.getElementsByClassName('js__product-tr')
		const image = product.getElementsByClassName('js__image')[0]
		const products_list = product.getElementsByClassName(
			'js__products-list'
		)[0]
		const loading_images = []
		let image_pos_status = false
		let dom_mobile_reconstruction_status = false
		//
		// function
		//

		// open new window
		const change_url = (elem) => {
			window.open(`${elem.dataset.productLink}`, '_blank')
		}

		// preload images
		const image_load = (url) => {
			const img = new Image()
			img.src = url
			return img
		}
		const images_load = () => {
			;[...product_trs].forEach((product_tr) => {
				if (
					product_tr.dataset.imgSrc !== '' &&
					product_tr.dataset.imgSrc !== undefined
				) {
					loading_images.push(image_load(product_tr.dataset.imgSrc))
					product_tr.classList.add('products__tr--have-image')
				} else {
					loading_images.push(
						image_load(
							'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D'
						)
					)
				}
			})
		}

		// show image
		const get_position_params = () => {
			return [
				event.clientY - products_list.getBoundingClientRect().top,
				event.clientX - products_list.getBoundingClientRect().left,
			]
		}
		const change_image_pos_status = () => {
			image_pos_status = false
		}
		const change_image_pos = () => {
			if (!image_pos_status) {
				image_pos_status = true
				const params = get_position_params()

				image.style.top = `${params[0] + 10}px`
				image.style.left = `${params[1] + 10}px`

				window.requestAnimationFrame(change_image_pos_status)
			}
		}

		// add and remove move listeners
		const add_move_listener = () => {
			products_list.addEventListener('mousemove', change_image_pos)
		}
		const remove_move_listener = () => {
			products_list.removeEventListener('mousemove', change_image_pos)
		}

		// write image src
		const write_image_src = (i) => {
			// preload images version
			// if (i == -1 || loading_images[i].src == '') {
			// dont preload version
			if (i == -1 || product_trs[i].dataset.imgSrc == '') {
				image.style.display = `none`
			} else {
				image.style.display = ``
				image.src = product_trs[i].dataset.imgSrc
			}
		}

		// drag_image_listeners
		const add_drag_image_listeners = () => {
			// show image above product
			for (let i = 0; i < product_trs.length; i++) {
				product_trs[i].addEventListener('mouseover', () => {
					write_image_src(i)
				})
				product_trs[i].addEventListener('mouseout', () => {
					write_image_src(-1)
				})
			}
			// listeners for table
			products_list.addEventListener('mouseover', add_move_listener)
			products_list.addEventListener('mouseout', remove_move_listener)
		}

		// mobile DOM content reconstruction
		const dom_mobile_reconstruction = () => {
			for (let i = 0; i < product_trs.length; i++) {
				// var-s
				if ((i + 1) % 4 == 0 || (i + 2) % 4 == 0) {
					product_trs[i].classList.add('products__tr--chet')
				} else {
					product_trs[i].classList.add('products__tr--nechet')
				}
			}
		}

		//
		// listener
		//

		// open new window to click
		;[...product_trs].forEach((product_tr) => {
			product_tr.addEventListener('click', () => {
				change_url(product_tr)
			})
		})

		// preload images
		const check_window_size = () => {
			if (
				document.documentElement.clientWidth > 999 &&
				!dom_mobile_reconstruction_status
			) {
				dom_mobile_reconstruction_status = true
				images_load()
			}
		}

		window.addEventListener(
			'DOMContentLoaded',
			dom_mobile_reconstruction
		)
		// window.addEventListener('DOMContentLoaded', check_window_size)
		// window.addEventListener('resize', check_window_size)

		//
		// image drag on / off treatment
		//
		const filter = document.getElementsByClassName('js__filter')[0]
		if (filter) {
			// DOM-s
			const drag_images =
				filter.getElementsByClassName('js__drag-images')
			// var-s
			let drag_status

			//
			// functions
			//

			// change status
			const drag_images_btn_class_toogle = () => {
				drag_images[0].classList.toggle('filter--drag-images')
			}
			const reload_page = () => {
				location.reload()
			}
			const set_image_drag_status = (drag_status) => {
				localStorage.setItem(
					'drag-status',
					JSON.stringify(drag_status)
				)
			}
			const change_drag_image_status = () => {
				event.stopPropagation()
				drag_images_btn_class_toogle()
				drag_status = !drag_status
				set_image_drag_status(drag_status)

				if (!drag_status) {
					add_drag_image_listeners()
				} else {
					reload_page()
				}
			}

			// check status
			const get_image_drag_status = () => {
				return (
					JSON.parse(localStorage.getItem('drag-status')) || false
				)
			}
			const check_image_drag_status = () => {
				drag_status = get_image_drag_status()
				if (!drag_status) {
					add_drag_image_listeners()
				} else {
					drag_images_btn_class_toogle()
				}
			}

			// listeners
			;[...drag_images].forEach((btn) =>
				btn.addEventListener('click', change_drag_image_status)
			)
			window.addEventListener('load', check_image_drag_status)
		}
	}
}
