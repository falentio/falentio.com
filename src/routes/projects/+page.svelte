<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	const projects = Object.values(
		import.meta.glob('/projects/**.json', { eager: true, as: 'json' })
	).sort((a, b) => new Date(b.date) - new Date(a.date));
</script>

<section>
	<div class="border-l-2 border-sky-500 px-1 w-max">
		<h1 class="text-3xl">Projects</h1>
	</div>

	<ul class="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-min">
		{#each projects as p (p.name)}
			<li class="p-2 w-full h-full">
				<ProjectCard {...p} />
			</li>
		{/each}
	</ul>
</section>
