<script>
	import Hero from '$lib/components/home/hero.svelte';
</script>

<main>
	<Hero />

	<div style="display: grid;place-items: center;margin: 20px auto 0;">
		<a
			href="https://github.com/matfantinel/matfantinel.github.io"
			target="_blank"
			class="button btn-secondary flex-[0_0_160px] sm:flex-[0_0_180px]">See source code on GitHub</a
		>
	</div>

	<div class="pt-8 relative w-2/5 m-auto text-center text-xs">
		<div class="grid grid-cols-3 gap-2 bt-2">
			<div>Primary p</div>
			<div>Primary focus pf</div>
			<div>Primary content pc</div>
		</div>
		<div class="grid grid-cols-3 gap-2">
			<div class="bg-primary aspect-square border-2 border-gray" />
			<div class="bg-primary-focus aspect-square border-2 border-gray" />
			<div class="bg-primary-content aspect-square border-2 border-gray" />
		</div>
		<div class="grid grid-cols-3 gap-2 pt-2">
			<div>Secondary s</div>
			<div>Secondary focus sf</div>
			<div>Secondary content sc</div>
		</div>
		<div class="grid grid-cols-3 gap-2">
			<div class="bg-secondary aspect-square border-2 border-gray" />
			<div class="bg-secondary-focus aspect-square border-2 border-gray" />
			<div class="bg-secondary-content aspect-square border-2 border-gray" />
		</div>
		<div class="grid grid-cols-3 gap-2 pt-2">
			<div>Neutral n</div>
			<div>Neutral focus nf</div>
			<div>Neutral content nc</div>
		</div>
		<div class="grid grid-cols-3 gap-2">
			<div class="bg-neutral aspect-square border-2 border-gray" />
			<div class="bg-neutral-focus aspect-square border-2 border-gray" />
			<div class="bg-neutral-content aspect-square border-2 border-gray" />
		</div>
		<div class="grid grid-cols-3 gap-2 pt-2">
			<div>Accent a</div>
			<div>Accent focus af</div>
			<div>Accent content ac</div>
		</div>
		<div class="grid grid-cols-3 gap-2">
			<div class="bg-accent aspect-square border-2 border-gray" />
			<div class="bg-accent-focus aspect-square border-2 border-gray" />
			<div class="bg-accent-content aspect-square border-2 border-gray" />
		</div>
		<div class="grid grid-cols-4 gap-2 pt-2">
			<div>Base100 b1</div>
			<div>Base200 b2</div>
			<div>Base300 b3</div>
			<div>BaseContent bc</div>
		</div>
		<div class="grid grid-cols-4 gap-2">
			<div class="bg-base-100 aspect-square border-2 border-gray" />
			<div class="bg-base-200 aspect-square border-2 border-gray" />
			<div class="bg-base-300 aspect-square border-2 border-gray" />
			<div class="bg-base-content aspect-square border-2 border-gray" />
		</div>
		<div class="grid grid-cols-4 gap-2 pt-2">
			<div>Info in</div>
			<div>Success su</div>
			<div>Warning wa</div>
			<div>Error er</div>
		</div>
		<div class="grid grid-cols-4 gap-2">
			<div class="bg-info aspect-square border-2 border-gray" />
			<div class="bg-success aspect-square border-2 border-gray" />
			<div class="bg-warning aspect-square border-2 border-gray" />
			<div class="bg-error aspect-square border-2 border-gray" />
		</div>
	</div>
	<slot />
</main>
