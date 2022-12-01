{
	const body = document.querySelector('body')
	const styleUpdate = () => {
		body.insertAdjacentHTML(
			'beforeend',
			`
		<style>
			*, ::after, ::before {
				-webkit-transition:
								width 100ms linear,
								max-width 100ms linear,
								height 100ms linear,
								max-height 100ms linear,
								color 100ms linear,
								border 100ms linear,
								box-shadow 100ms linear,
								background 100ms linear,
								margin 100ms linear,
								padding 100ms linear,
								transform 100ms linear,
								opacity 100ms linear,
								left 100ms linear,
								top 100ms linear,
								bottom 100ms linear,
								right 100ms linear,
								z-index 100ms linear,
								fill 100ms linear;
				-moz-transition:
								width 100ms linear,
								max-width 100ms linear,
								height 100ms linear,
								max-height 100ms linear,
								color 100ms linear,
								border 100ms linear,
								box-shadow 100ms linear,
								background 100ms linear,
								margin 100ms linear,
								padding 100ms linear,
								transform 100ms linear,
								opacity 100ms linear,
								left 100ms linear,
								top 100ms linear,
								bottom 100ms linear,
								right 100ms linear,
								z-index 100ms linear,
								fill 100ms linear;
				-o-transition:
								width 100ms linear,
								max-width 100ms linear,
								height 100ms linear,
								max-height 100ms linear,
								color 100ms linear,
								border 100ms linear,
								box-shadow 100ms linear,
								background 100ms linear,
								margin 100ms linear,
								padding 100ms linear,
								transform 100ms linear,
								opacity 100ms linear,
								left 100ms linear,
								top 100ms linear,
								bottom 100ms linear,
								right 100ms linear,
								z-index 100ms linear,
								fill 100ms linear;
				-ms-transition:
								width 100ms linear,
								max-width 100ms linear,
								height 100ms linear,
								max-height 100ms linear,
								color 100ms linear,
								border 100ms linear,
								box-shadow 100ms linear,
								background 100ms linear,
								margin 100ms linear,
								padding 100ms linear,
								transform 100ms linear,
								opacity 100ms linear,
								left 100ms linear,
								top 100ms linear,
								bottom 100ms linear,
								right 100ms linear,
								z-index 100ms linear,
								fill 100ms linear;
				transition: width 100ms linear,
								max-width 100ms linear,
								height 100ms linear,
								max-height 100ms linear,
								color 100ms linear,
								border 100ms linear,
								box-shadow 100ms linear,
								background 100ms linear,
								margin 100ms linear,
								padding 100ms linear,
								transform 100ms linear,
								opacity 100ms linear,
								left 100ms linear,
								top 100ms linear,
								bottom 100ms linear,
								right 100ms linear,
								z-index 100ms linear,
								fill 100ms linear;
			}
		</style>
	`
		)
	}
	window.addEventListener('load', styleUpdate)
}
