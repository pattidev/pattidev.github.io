<script>
	import Card from '$lib/components/base/card.svelte';
	import Figure from '$lib/components/base/figure.svelte';
	import Tags from './tags.svelte';

	export let post;
	export let showImage = true;
</script>

{#if post}
	<Card url="/{post.slug}">
		<div slot="figure">
			{#if showImage}
				<Figure path="posts/{post.slug}" filename="cover" alt="Cover Figure" />
			{/if}
		</div>
		<div slot="content">
			<div class="title">{post.title}</div>
			<div class="note">{post.readingTime}</div>
			<div class="text">{post.excerpt}</div>
		</div>
		<div slot="footer">
			{#if post.tags}
				<div class="tags">
					{#each post.tags.slice(0, 2) as tag}
						<Tags>{tag}</Tags>
					{/each}
				</div>
			{/if}
		</div>
	</Card>
{/if}
