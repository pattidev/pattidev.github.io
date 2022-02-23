<script>
	export let title = null;
	export let description = null;
	export let buttonText = null;
	export let buttonUrl = null;
	export let align = 'left';
</script>

<div class="section-container flex flex-col sm:flex-row items-center justify-between gap-8 py-12">
	<div
		class="title-area flex flex-col justify-center items-center text-center gap-4 flex-[2_1_0%] {align ==
		'left'
			? 'order-1'
			: 'order-2'}"
	>
		{#if title || description}
			<div class="text flex flex-col justify-center align-center gap-1">
				{#if title}
					<h2>
						{title}
					</h2>
				{/if}
				{#if description}
					<p>
						{description}
					</p>
				{/if}
			</div>
		{/if}
		{#if buttonText && buttonUrl}
			<a class="btn-primary min-w-[180px] max-w-full w-auto" href={buttonUrl}>
				{buttonText}
			</a>
		{/if}
	</div>
	<div
		class="content-area flex flex-col justify-center items-center flex-[5_1_0%]  {align == 'left'
			? 'order-2'
			: 'order-1'}"
	>
		<slot />
	</div>
</div>
