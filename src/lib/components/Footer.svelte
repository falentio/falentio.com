<script lang="ts">
	import Icon from '@iconify/svelte';

	const social = [
		// ["mdi:github", "https://github.com/falentio", "github"],
	];
</script>

<div
	class="block ring-1 ring-black bg-gray-50 dark:bg-slate-900 dark:ring-zinc-700 grid grid-cols-2 auto-rows-auto py-2 px-4"
>
	<div class="text-center flex flex-col col-span-2">
		<span>
			Written by <a href="//github.com/falentio" target="_blank" class="text-blue-500">@falentio</a
			></span
		>
	</div>
	<ul class="flex flex-col capitalize mx-auto col-span-2">
		{#each social as [icon, href, text] (text)}
			<li class="px-2">
				<a target="_blank" {href} class="flex flex-row items-center">
					<Icon {icon} class="h-max" />
					<span class="mx-1 text-sm">{text}</span>
				</a>
			</li>
		{/each}
	</ul>
	<div class="col-span-2 text-center">
		<span> &copy; 2022 Kevin Falentio </span>
	</div>
</div>
<div class="h-16 md:hidden" />
