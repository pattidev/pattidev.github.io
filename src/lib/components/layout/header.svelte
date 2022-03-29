<script>
	import Logo from '$lib/svg/logo.svelte';
	import Socials from '$lib/components/base/socials.svelte';
	import Themes from '$lib/components/base/themes.svelte';
	import ThemesButton from '$lib/components/base/themes-buttons.svelte';
	import BlogIcon from '$lib/svg/socials/blog-header.svelte';
	import CVIcon from '$lib/svg/socials/cv-header.svelte';
	export let animated = true;
</script>

<header class="relative md:pb-8 sm:pt-8 pt-0 pb-0">
	<div class="sm:hidden absolute inset-y-14 right-6">
		<ThemesButton />
		<Themes />
	</div>
	<nav class="container mx-auto flex flex-col items-center justify-center sm:justify-between">
		<div class="pt-4 sm:hidden pb-4">
			<Socials />
		</div>
	</nav>
	<nav class="container mx-auto flex items-center justify-center sm:justify-between">
		<div
			class="left flex flex-col items-center justify-center sm:justify-between gap-4 sm:gap-8 sm:flex-row mr-2"
		>
			<a class="logo h-10" href="/" alt="Site logo">
				<Logo {animated} />
			</a>
			<div class="links flex items-center justify-center gap-8 font-normal" />
		</div>
		<div class="flex flex-row items-center gap-4">
			<div class="right hidden sm:flex">
				<Socials />
			</div>

			<div class="hidden sm:block">
				<Themes />
			</div>
		</div>
	</nav>
</header>
