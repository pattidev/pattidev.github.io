<script>
	import Logo from '$lib/svg/logo.svelte';
	import Socials from '$lib/components/base/socials.svelte';
	import Themes from '$lib/components/base/themes.svelte';
	import ThemesButton from '$lib/components/base/themes-buttons.svelte';

	export let animated = true;
</script>

<header class="relative py-8">
	<div class="sm:hidden absolute inset-y-8 right-8">
		<ThemesButton />
		<Themes />
	</div>
	<nav class="container mx-auto flex items-center justify-center sm:justify-between">
		<div
			class="left flex flex-col items-center justify-center sm:justify-between gap-4 sm:gap-8 sm:flex-row"
		>
			<a class="logo h-10" href="/" alt="Site logo">
				<Logo {animated} />
			</a>
			<div class="links flex items-center justify-center gap-8 font-normal">
				<a
					href="/blog"
					class="text-base-content fill-base-content hover:text-primary hover:fill-primary hover:no-underline"
					>Blog 📔</a
				>
				<a
					href="/resume"
					class="text-base-content fill-base-content hover:text-primary hover:fill-primary hover:no-underline"
					>CV 💼</a
				>
			</div>
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
	<nav class="container mx-auto flex flex-c items-center justify-center sm:justify-between">
		<div class="pt-4 sm:hidden">
			<Socials />
		</div>
	</nav>
</header>
