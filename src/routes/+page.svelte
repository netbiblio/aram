<script lang="ts">
	import { page } from '$app/state';
	import { CONTENTS, PAGES } from '@/lib/constants';
</script>

<section class="contents">
	<h2 class="contents__title">{page.data.title}</h2>

	<table class="contents__table">
		<thead>
			<tr>
				<th class="contents__head-cell"></th>
				<th class="contents__head-cell">Произведение</th>
			</tr>
		</thead>
		<tbody>
			{#each PAGES as href (href)}
				<tr class="contents__item">
					<td class="contents__number"></td>
					<td class="contents__name">
						<a
							class="contents__link"
							href="/aram{page.data.isAmp ? '/amp' : ''}{href}"
						>
							<span>{CONTENTS[href].title}</span>
						</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
