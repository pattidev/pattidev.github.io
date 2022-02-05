<script>
	import themeStore from 'svelte-themes';
</script>

<div
	class="form-control w-fit max-w-xs hidden md:inline-flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-medium"
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
