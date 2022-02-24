<script>
	export let alt;
	export let path = null;
	export let filename;
	export let figcaption = null;

	let imageSrc;

	$: imageSrc = `/optimized-images/${path ? path + '/' : ''}${filename}`;
</script>

<figure class="relative w-full h-full">
	<source srcset="{imageSrc}.avif" type="image/avif" />
	<source srcset="{imageSrc}.webp" type="image/webp" />
	<img class="w-full h-full" src="{imageSrc}.png" {alt} loading="lazy" decoding="async" />

	{#if figcaption}
		<figcaption>{@html figcaption}</figcaption>
	{/if}
</figure>
