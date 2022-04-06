<script>
	import Logo from '$lib/svg/logo.svelte';
	import Socials from '$lib/components/base/socials.svelte';
	import Themes from '$lib/components/base/themes.svelte';
	export let animated = true;
	let checked = '';

	function handleClick() {
		checked == 'checked' ? (checked = '') : (checked = 'checked');
	}
</script>

<div class="drawer fixed z-50 {checked ? 'h-full' : 'h-[73px]'}">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" bind:checked />
	<div class="drawer-content flex flex-col">
		<div
			class="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100"
		>
			<div class="w-full navbar fixed bg-base-100 border-b">
				<div class="flex-none sm:hidden">
					<label for="my-drawer" class="btn btn-square btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block w-6 h-6 stroke-current"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/></svg
						>
					</label>
				</div>
				<nav class="container mx-auto mt-auto flex items-center justify-center sm:justify-between">
					<div
						class="left flex flex-col items-center justify-center sm:justify-between gap-4 sm:gap-8 sm:flex-row mr-2"
					>
						<a class="logo h-10" href="/" alt="Site logo">
							<Logo {animated} />
						</a>
					</div>
					<div class="flex flex-row items-center gap-4">
						<div class="right hidden sm:flex">
							<Socials />
						</div>

						<div
							class="hidden sm:flex border-l text-2xs text-center text-base-content items-center pl-2"
						>
							<Themes />
						</div>
					</div>
				</nav>
			</div>
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer" class="drawer-overlay" />
		<ul class="side-content border-r pt-2 pb-4 overflow-y-auto menu w-24 bg-base-100">
			<nav
				class="container text-xs leading-3 text-center text-base-content mx-auto flex flex-col items-center justify-center sm:justify-between"
			>
				<div class="border-b mb-2 ">
					Theme
					<Themes side="vertical" />
				</div>
				Links

				<div class="pt-2 sm:hidden pb-4">
					<Socials flex="col" />
				</div>
			</nav>
		</ul>
	</div>
</div>

<!-- 
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
</header> -->
<style>
	.drawer {
		ul {
			margin: 0px;
		}
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	.side-content::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.side-content {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	.drawer {
		-ms-overflow-style: none !important; /* IE and Edge */
		scrollbar-width: none !important; /* Firefox */
	}

	.drawer-overlay {
		opacity: 0 !important;
	}
</style>
