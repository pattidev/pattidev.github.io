<script>
	import themeStore from 'svelte-themes';
	export let side = 'horizontal';
</script>

<div
	class="form-control flex flex-row w-fit max-w-xs {side == 'horizontal'
		? 'hidden'
		: 'vertical'} md:inline-flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-sm font-medium"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		aria-label="themes"
		viewBox="0 0 24 24"
		class="inline-block h-5 w-5 stroke-base-content md:h-6 md:w-6"
		><path
			width="24"
			height="24"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.5"
			d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
		/></svg
	>
	<select
		bind:value={$themeStore.theme}
		class="select select-xs pt-1 select-primary bg-fill-base-100 text-primary select-bordered w-fit relative appearance-none"
	>
		<option value="default">Default</option>
		<option value="dark">Dark</option>
		<option value="light">Light</option>
		<option value="system">System</option>
		<option value="fantinel">Fantinel</option>
		<option value="cupcake">Cupcake</option>
		<option value="fantasy">Fantasy</option>
	</select>
</div>

<style>
	.vertical .select {
		width: 20px;
		padding-top: 10px;
	}
</style>
