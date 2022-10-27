<script lang="ts">
	import NavbarItem from '$lib/components/NavbarItem.svelte';
	import ThemeSwitchButton from '$lib/components/ThemeSwitchButton.svelte';

	const icons: string[][] = [
		['home', 'carbon:home', '/'],
		['projects', 'carbon:code', '/projects']
		// ["blog", "carbon:license-draft", "/blog"],
	];
</script>

<nav
	class="fixed z-20 bottom-0 h-16 w-full md:sticky md:top-0 md:h-max md:w-20 border border-black bg-gray-50 dark:bg-slate-900 dark:border-zinc-700"
>
	<div
		class="p-2 h-full w-full capitalize flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden md:overflow-hidden md:flex-col md:justify-start"
	>
		<div class="hidden md:block md:border-y-2 border-zinc-700 text-center my-2">Menu</div>
		{#each icons as [text, icon, href] (text)}
			<NavbarItem {text} {icon} {href} />
		{/each}
		<div
			class="md:py-4 h-full w-12 text-center ml-auto md:mx-auto md:order-first bg-gray-50 dark:bg-slate-900"
		>
			<ThemeSwitchButton />
		</div>
	</div>
</nav>
