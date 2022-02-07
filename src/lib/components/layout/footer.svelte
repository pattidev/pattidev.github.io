<script>
	import FooterWave from '$lib/svg/footer-wave.svelte';
	import Socials from '$lib/components/base/socials.svelte';

	let currentYear = new Date().getFullYear();
</script>

<footer
	class="h-80 w-full bg-gradient-to-r from-primary/20 to-primary/50 grid grid-rows-[120px_1fr]"
>
	<div class="wave">
		<FooterWave />
	</div>
	<div class="content flex flex-col items-center justify-center gap-4 font-semibold text-center">
		<div class="copyright">
			© {currentYear} Marco Patti.
		</div>
		<div class="credits font-normal text-sm text-base-content/80">
			Powered by <a href="https://kit.svelte.dev/" target="_blank" rel="noopener">SvelteKit</a>.
			Icons by <a href="https://iconoir.com/" target="_blank" rel="noopener">Iconoir</a>.
		</div>
		<div class="socials">
			<Socials />
		</div>
	</div>
</footer>
