<div
	class="grid-container w-full flex flex-col h-auto md:grid gap-5 md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]"
>
	<slot />
</div>

<style>
	.grid-container {
		> :global(:nth-child(6n + 1)) {
			grid-column: span 6;
		}
		> :global(:nth-child(6n + 2)) {
			grid-column: span 3;
		}
		> :global(:nth-child(6n + 3)) {
			grid-column: span 3;
		}
		> :global(:nth-child(6n + 4)),
		:global(:nth-child(6n + 5)),
		:global(:nth-child(6n + 6)) {
			grid-column: span 2;
		}
	}
</style>
