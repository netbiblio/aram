<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import '@/scss/index.scss';
	import { BASE_URL, PROJECT_NAME } from '@/lib/constants';
	import { hitYM } from '@/lib/ym';

	let { children } = $props();
	let id = $derived(
		page.params.id
			? `/${page.params.id}`
			: (page.route.id || '/').replace('/amp', '')
	);

	afterNavigate(function ({ from }) {
		hitYM({ referer: from?.url.toString() || '' });
	});
</script>

<svelte:head>
	<title>{[PROJECT_NAME, page.data.title].join('. ')}</title>
	<meta name="description" content={page.data.description} />
	<link rel="canonical" href="{BASE_URL}{id}" />
	<meta property="og:title" content={page.data.title} />
	<meta property="og:description" content={page.data.description} />
	<meta property="og:url" content="{BASE_URL}{id}" />

	{#if !page.data.isAmp}
		<link rel="amphtml" href="{BASE_URL}/amp{id}" />
	{/if}
</svelte:head>

<div class="app">
	<main class="app__main">
		<h1 class="app__title">
			{#if id === '/'}
				{PROJECT_NAME}
			{:else}
				<a href="/aram{page.data.isAmp ? '/amp' : ''}">{PROJECT_NAME}</a>
			{/if}
		</h1>

		{@render children()}
	</main>

	<footer class="app__footer">
		Все права защищены
		<br />
		©
		<a href="https://netbiblio.github.io">netbiblio</a>
		2025
	</footer>
</div>
