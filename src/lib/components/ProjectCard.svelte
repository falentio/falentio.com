<script lang="ts">
	import Icon from "@iconify/svelte"
	export let name: string
	export let description: string
	export let repository: string
	export let site: string
	export let previewImg: string
	const image = `/project-preview-images/${previewImg}`
</script>

<section class="shadow-sm grid grid-cols-5 bg-gray-50 dark:bg-slate-900 ring-1 ring-black dark:ring-zinc-700">
	<div class="col-span-2 h-20 w-full overflow-hidden">
		<img src={image} width="400" height="200" class="object-cover block h-full" />
	</div>
	<div class="col-span-3 px-2 flex flex-col">
		<h2 class="text-xl"> {name} </h2>
		<span class="truncate text-sm"> {description} </span>
		<div class="flex-auto"></div>
		<div class="w-max ml-auto grid grid-rows-1 auto-cols-max grid-flow-col text-sm">
			{#if repository}
				<a class="px-1 w-max flex flex-row items-center hover:text-blue-500" target="_blank" href={repository}>
					<Icon icon="mdi:github" /> 
					<span> Github </span>
				</a>
			{/if}
			{#if site}
				<a class="px-1 w-max flex flex-row items-center hover:text-blue-500" target="_blank" href={site}>
					<Icon icon="mdi:link-variant" /> 
					<span> Visit </span>
				</a>
			{/if}
		</div>
	</div>
</section>