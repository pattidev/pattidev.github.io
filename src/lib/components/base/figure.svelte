<script>
	export let alt;
	export let path = null;
	export let filename;
	export let figcaption = null;

	let imageSrc;

	$: imageSrc = `/optimized-images/${path ? path + '/' : ''}${filename}`;
</script>

<figure class="relative w-full h-in" style="max-height: inherit;">
	<picture class="relative w-full h-auto" style="max-height: inherit;">
		<source srcset="{imageSrc}.avif" type="image/avif" />
		<source srcset="{imageSrc}.webp" type="image/webp" />
		<img
			class="w-full h-full"
			style="max-height: inherit;"
			src="{imageSrc}.png"
			{alt}
			loading="lazy"
			decoding="async"
		/>
	</picture>
	{#if figcaption}
		<figcaption>{@html figcaption}</figcaption>
	{/if}
</figure>
