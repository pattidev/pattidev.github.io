<script>
	import ProjectsIcon from '$lib/svg/projects.svelte';
	import BlogIcon from '$lib/svg/blog.svelte';
	import ExperienceIcon from '$lib/svg/experience.svelte';
</script>

<section
	class="hero flex flex-col items-center content-center gap-4 relative pt-6 px-0 pb-4 sm:py-16 sm:px-0"
>
	<h1 class="justify-center">Hello, I'm Marco!</h1>
	<p class="intro font-medium text-2xl flex-col hidden sm:flex">
		<span class="text-left">I build fun stuff on the web,</span>
		<span class="text-right">and sometimes write about it.</span>
	</p>
	<div class="ctas flex flex-wrap items-center justify-center gap-3 w-full">
		<a
			id="projects-btn"
			href="#projects"
			class="button btn-primary-light flex-[0_0_160px] sm:flex-[0_0_180px] order-1 sm:order-1"
		>
			<ProjectsIcon />
			Projects
		</a>
		<a
			id="blog-btn"
			href="/blog"
			class="button btn-primary flex-[0_0_160px] sm:flex-[0_0_180px] order-3 sm:order-2"
		>
			<BlogIcon />
			Blog
		</a>
		<a
			id="experience-btn"
			href="#experience"
			class="btn-secondary flex-[0_0_160px] sm:flex-[0_0_180px] order-2 sm:order-3"
		>
			<ExperienceIcon />
			Experience
		</a>
	</div>
</section>

<style>
	.intro {
		width: min(100%, 440px);
	}
</style>
