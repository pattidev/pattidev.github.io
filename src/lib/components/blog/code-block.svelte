<script>
	export let filename;
	export let lang;
</script>

<div
	class="code-block block relative bg-base-content text-white font-mono
    text-base leading-5 rounded-[8px] shadow-md py-8 px-4 my-8 mx-0"
>
	{#if filename}
		<div class="filename">{filename}</div>
	{/if}
	{#if lang}
		<div class="lang">{lang}</div>
	{/if}
	<slot />
</div>

<style>
	.code-block {
		.lang {
			position: absolute;
			right: 0;
			top: -15px;
			background: inherit;
			border-radius: 8px;
			padding: 5px 10px;
			z-index: 2;
			font-size: 0.85em;
		}

		:global(token.comment),
		:global(token.prolog),
		:global(token.cdata) {
			color: rgb(99, 119, 119);
			font-style: italic;
		}

		.filename {
			background: inherit;
			border-top-left-radius: 8px;
			border-top-right-radius: 8px;
			margin-bottom: -2px;
			padding: 5px 10px;
			position: absolute;
			left: 0px;
			top: -15px;
			z-index: 1;
		}
	}
</style>
