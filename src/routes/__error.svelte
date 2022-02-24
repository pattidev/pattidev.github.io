<script>
	import Error from '$lib/svg/error.svelte';
</script>

<div class="error-page relative">
	<div class="container flex flex-col items-center justify-center min-h-[60vh] align-center">
		<h1>Oh no!</h1>
		<div class="svg-wrapper w-80 mt-[-60px] mb-[-30px]">
			<Error />
		</div>
		<p>It seems like coffee was spilled all over this page, and now it can't be displayed.</p>
		<a class="button btn-primary mt-7 w-fit hover:shadow-md" href="/">Start over</a>
	</div>
</div>
