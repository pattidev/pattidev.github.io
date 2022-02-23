<script>
	export let color = 'primary';
</script>

{#if color == 'primary'}
	<div class="tag bg-primary-focus/70 text-base-100">
		<slot />
	</div>
{:else}
	<div class="tag bg-secondary-focus/70 text-base-100">
		<slot />
	</div>
{/if}

<style>
	.tag {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		padding: 5px 12px 2px 12px;
		border-radius: 10px;
		font-weight: 500;
		font-size: 0.85rem;
		width: fit-content;
		white-space: nowrap;
	}
</style>
