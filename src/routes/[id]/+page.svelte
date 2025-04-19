<script lang="ts">
	import { page } from '$app/state';
	import { minifyInternal } from '@/lib/minify';
</script>

<article class="work">
	<h2 class="work__subtitle">
		{page.data.title.startsWith('«') ? '***' : page.data.title}
	</h2>

	<div class="work__poem">
		{@html minifyInternal(page.data.text!)}
	</div>

	{@html page.data.time}
</article>
