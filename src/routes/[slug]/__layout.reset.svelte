<script context="module">
	export async function load({ url, params, fetch }) {
		const slug = url.pathname.split('/').slice(-1)[0]; // last part of url path
		const extUrl = `/${slug}.json`;
		const res = await fetch(extUrl);

		if (res.ok) {
			return {
				props: {
					post: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${extUrl}`)
		};
	}
</script>

<script>
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import '../../app.css';

	import Figure from '$lib/components/base/figure.svelte';
	import Tags from '$lib/components/base/tags.svelte';
	// import dateformat from 'dateformat';
	import BlogPostCard from '$lib/components/base/blog-post-card.svelte';
	import ThreeByThreeGrid from '$lib/components/layout/3x3-grid.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import Waves from '$lib/components/layout/waves.svelte';

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
<Waves />
<div class="blog-layout">
	<Header animated={false} />

	<main>
		<article class="blog-post relative pt-10 pb-20 px-4 md:px-5 lg:px-8 bg-base-100">
			<div class="header">
				<h1>{post.title}</h1>
				<!-- <div class="note">Published on {dateformat(post.date, 'UTC:dd mmmm yyyy')}</div> -->
				<div class="note text-b">{post.readingTime}</div>
				<div class="tags">
					{#each post.tags as tag}
						<Tags>{tag}</Tags>
					{/each}
				</div>
			</div>
			<div class="cover-image ">
				<Figure filename="cover" alt="Cover Figure" />
			</div>
			<div class="content">
				<slot />
			</div>
		</article>

		{#if post.relatedPosts && post.relatedPosts.length > 0}
			<div class="related-posts container">
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
	#blog-post {
		display: grid;
		grid-template-columns:
			1fr
			min(65ch, 100%)
			1fr;
		grid-row-gap: 30px;
		> * {
			grid-column: 2;
		}

		.header {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			gap: 10px;

			.note {
				font-size: 90%;
			}
		}

		.cover-image {
			width: 100%;
			max-height: 400px;
			box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06), 1px 3px 8px rgba(39, 44, 49, 0.03);

			:global(img) {
				object-fit: cover;
			}
		}

		.tags {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 5px;
			flex-wrap: wrap;
		}

		.content {
			:global(p) {
				margin: 0.75rem 0;
				line-height: 1.55em;
				color: #ffffff;
			}
		}

		:global(h2) {
			margin: 3rem 0 0.5rem;
		}

		:global(h3) {
			font-size: 1.2rem;
			margin: 2rem 0 0.3rem;
		}

		:global(h4) {
			font-size: 1.3rem;
			margin: 2rem 0 0.3rem;
		}
	}
</style>
