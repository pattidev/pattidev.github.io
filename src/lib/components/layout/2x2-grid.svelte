<div class="grid-container  grid-cols-[1fr] sm:grid-cols-[1fr_1fr]">
	<slot />
</div>

<style>
	.grid-container {
		width: 100%;
		display: grid;
		grid-gap: 20px;
	}
</style>
