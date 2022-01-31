<script>
	import TelegramIcon from '$lib/svg/socials/telegram.svelte';
	import TwitterIcon from '$lib/svg/socials/twitter.svelte';
	import GitHubIcon from '$lib/svg/socials/github.svelte';
	import LinkedInIcon from '$lib/svg/socials/linkedin.svelte';
	import EmailIcon from '$lib/svg/socials/email.svelte';
	import Rss from '$lib/svg/rss.svelte';
</script>

<div class="flex items-center gap-5">
	<a class="w-6" href="https://t.me/" target="_blank" rel="noopener" title="Say Hi on Telegram">
		<TelegramIcon />
	</a>
	<a
		class="w-6"
		href="https://twitter.com/"
		target="_blank"
		rel="noopener"
		title="Say Hi on Twitter"
	>
		<TwitterIcon />
	</a>
	<a
		class="w-6"
		href="https://github.com/pattidev"
		target="_blank"
		rel="noopener"
		title="See my GitHub profile"
	>
		<GitHubIcon />
	</a>
	<a
		class="w-6"
		href="https://www.linkedin.com/in/"
		target="_blank"
		rel="noopener"
		title="Connect on LinkedIn"
	>
		<LinkedInIcon />
	</a>
	<a
		class="w-6"
		href="mailto:marco@patti.dev"
		target="_blank"
		rel="noopener"
		title="Send an email to marco@patti.dev"
	>
		<EmailIcon />
	</a>
	<a class="w-6" href="/rss.xml" target="_blank" rel="noopener" title="Subscribe to my RSS Feed">
		<Rss />
	</a>
</div>
