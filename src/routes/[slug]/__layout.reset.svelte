<script context="module">
	export async function load({ url, params, fetch }) {
		const jsonUrl = url.pathname.replace(/\/\s*$/, '') + '.json';
		const res = await fetch(jsonUrl);

		if (res.ok) {
			return {
				props: {
					post: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${jsonUrl}`)
		};
	}
</script>

<script>
	import '../../app.css';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';

	import Figure from '$lib/components/base/figure.svelte';
	import Tags from '$lib/components/base/tags.svelte';
	import BlogPostCard from '$lib/components/base/blog-post-card.svelte';
	import ThreeByThreeGrid from '$lib/components/layout/3x3-grid.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import Waves from '$lib/components/layout/waves.svelte';
	import SvelteTheme from 'svelte-themes/SvelteTheme.svelte';

	import { keywords, siteBaseUrl, title } from '$lib/meta';

	export let post;
</script>

<svelte:head>
	<meta name="keywords" content={post.tags.concat(keywords).join(', ')} />

	<meta name="description" content={post.excerpt} />
	<meta property="og:description" content={post.excerpt} />
	<meta name="twitter:description" content={post.excerpt} />

	<title>{post.title} - {title}</title>
	<meta property="og:title" content="{post.title} - {title}" />
	<meta name="twitter:title" content="{post.title} - {title}" />

	<meta property="og:image" content="{siteBaseUrl}/images/posts/{post.slug}/cover.jpg" />
	<meta name="twitter:image" content="{siteBaseUrl}/images/posts/{post.slug}/cover.jpg" />
</svelte:head>

<SvelteTheme />

<div class="blog-layout">
	<Waves />
	<Header />
	<main>
		<article class="blog-post relative pt-10 pb-4 px-4 md:px-5 lg:px-8">
			<div class="header">
				<h1>{post.title}</h1>
				<div class="note">
					{post.date.replace(/T/, ' ').replace(/00:00:00.000Z/, '')} - {post.readingTime}
				</div>
				<div class="tags">
					{#each post.tags as tag}
						<Tags>{tag}</Tags>
					{/each}
				</div>
			</div>
			<div class="cover-image">
				<Figure path="posts/{post.slug}" filename="cover" alt="Cover Figure" />
			</div>
			<div class="content">
				<slot />
			</div>
		</article>

		{#if post.relatedPosts && post.relatedPosts.length > 0}
			<div class="related-posts container ">
				<Section
					title="Related posts"
					description="Have some time? Feel free to read other posts about the same subject."
					align="top"
				>
					<ThreeByThreeGrid>
						{#each post.relatedPosts as rel}
							<BlogPostCard post={rel} />
						{/each}
					</ThreeByThreeGrid>
				</Section>
			</div>
		{/if}
	</main>

	<Footer />
</div>

<style>
	.cover-image {
		width: 100%;
		max-height: 400px;
		box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06), 1px 3px 8px rgba(39, 44, 49, 0.03);

		:global(img),
		:global(picture) :global(figure) {
			max-height: inherit;
			object-fit: cover;
		}
	}
	:global(.footnotes) {
		margin-top: 20px;
	}
</style>
