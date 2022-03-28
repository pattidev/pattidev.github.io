<script>
	import Alert from '$lib/svg/alert.svelte';
	import Check from '$lib/svg/check.svelte';
	import Info from '$lib/svg/info.svelte';

	export let type = null;
</script>

<div class="callout-block {type ?? ''}">
	{#if type}
		<div class="icon-wrapper">
			{#if type == 'info'}
				<Info />
			{:else if type == 'warning' || type == 'error'}
				<Alert />
			{:else if type == 'success'}
				<Check />
			{/if}
		</div>
	{/if}
	<slot />
</div>
