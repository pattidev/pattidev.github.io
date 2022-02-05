<script>
	import Hero from '$lib/components/home/hero.svelte';
</script>

<main>
	<Hero />
	<div class="relative w-2/5 m-auto">
		<div class="grid grid-cols-5 gap-2">
			<div class="bg-primary aspect-square border-2 border-gray" />
			<div class="bg-primary-focus aspect-square border-2 border-gray" />
			<div class="bg-primary-content aspect-square border-2 border-gray" />
			<div
				class="bg-primary aspect-square border-2 border-gray text-primary-content py-6 text-center"
			>
				Primary
			</div>
			<div
				class="bg-primary-focus aspect-square border-2 border-gray text-primary-content py-6 text-center"
			>
				Primary Focus
			</div>
		</div>
		<div class="grid grid-cols-5 gap-2">
			<div class="bg-secondary aspect-square border-2 border-gray" />
			<div class="bg-secondary-focus aspect-square border-2 border-gray" />
			<div class="bg-secondary-content aspect-square border-2 border-gray" />
			<div
				class="bg-secondary aspect-square border-2 border-gray text-primary-content py-6 text-center"
			>
				Secondary
			</div>
			<div
				class="bg-secondary-focus aspect-square border-2 border-gray text-primary-content py-6 text-center"
			>
				Secondary Focus
			</div>
		</div>
		<div class="grid grid-cols-5 gap-2">
			<div class="bg-neutral aspect-square border-2 border-gray" />
			<div class="bg-neutral-focus aspect-square border-2 border-gray" />
			<div class="bg-neutral-content aspect-square border-2 border-gray" />
			<div
				class="bg-neutral aspect-square border-2 border-gray text-primary-content py-6 text-center"
			>
				Neutral
			</div>
			<div
				class="bg-neutral-focus aspect-square border-2 border-gray text-primary-content py-6 text-center"
			>
				Neutral Focus
			</div>
		</div>
		<div class="grid grid-cols-5 gap-2">
			<div class="bg-accent aspect-square border-2 border-gray" />
			<div class="bg-accent-focus aspect-square border-2 border-gray" />
			<div class="bg-accent-content aspect-square border-2 border-gray" />
			<div
				class="bg-accent aspect-square border-2 border-gray text-primary-content py-6 text-center"
			>
				Accent
			</div>
			<div
				class="bg-accent-focus aspect-square border-2 border-gray text-primary-content py-6 text-center"
			>
				Accent Focus
			</div>
		</div>
		<div class="grid grid-cols-5 gap-2">
			<div class="bg-base-100 aspect-square border-2 border-gray" />
			<div class="bg-base-200 aspect-square border-2 border-gray" />
			<div class="bg-base-300 aspect-square border-2 border-gray" />
			<div
				class="bg-base-100 aspect-square border-2 border-gray text-base-content py-6 text-center"
			>
				base-100
			</div>
			<div
				class="bg-base-200 aspect-square border-2 border-gray text-base-content py-6 text-center"
			>
				base-100 Focus
			</div>
		</div>
	</div>
	<slot />
</main>
