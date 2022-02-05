<script>
	import Avatar from '$lib/svg/avatar.svelte';
	import Blob1 from '$lib/svg/blobs/blob1.svelte';
	import Blob2 from '$lib/svg/blobs/blob2.svelte';
	import Blob3 from '$lib/svg/blobs/blob3.svelte';
	import SparklingHighlight from '../style/sparkling-highlight.svelte';
</script>

<section
	id="about"
	class="relative overflow-hidden grid grid-cols-none md:grid-cols-[500px_200px] items-center justify-center sm:justify-between"
>
	<div class="info flex flex-col gap-3">
		<h2 class="text-center md:text-right">
			I'm a developer aiming to build things that
			<SparklingHighlight>spark joy</SparklingHighlight>
		</h2>
		<p class="text-justify md:text-left">
			I believe software should be great for everyone — those who write it and those who use it —
			and that bringing joy to problem-solving is the key to that.
		</p>
	</div>

	<div
		class="avatar group w-64 h-64 relative m-auto xl:pr-32 md:pr-28 md:m-0 flex items-center justify-center group-hover:animate-blobspin"
	>
		<div class="blob one absolute group-hover:animate-blobspin"><Blob1 /></div>
		<div class="blob two absolute group-hover:animate-blobspin"><Blob2 /></div>
		<div class="blob three absolute group-hover:animate-blobspin"><Blob3 /></div>
		<div class="image absolute rounded-full scale-75 md:hidden">
			<Avatar />
		</div>
	</div>
</section>

<style>
	.blob {
		position: absolute;
		animation-fill-mode: forwards;
	}

	.blob.one {
		height: 130%;
		width: 130%;
		animation-duration: 4s;
	}
	.blob.two {
		height: 140%;
		width: 140%;
		animation-duration: 2.5s;
	}
	.blob.three {
		height: 150%;
		width: 150%;
		animation-duration: 3.5s;
	}
</style>
