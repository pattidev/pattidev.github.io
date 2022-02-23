<script>
	export let id;
</script>

<div
	class="relative inline-block z-10 before:bg-primary-focus/30 before:w-[110%] before:h-2 before:absolute before:bottom-1 before:-left-1 before:-z-10"
	{id}
>
	<slot />
</div>
