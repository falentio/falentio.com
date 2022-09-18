<script>
	import "../app.css";
	import "@fontsource/abel/400.css"
	import "$lib/theme/theme"
	import Navbar from "$lib/components/Navbar.svelte"
	import Footer from "$lib/components/Footer.svelte"
	import { browser } from "$app/environment"
</script>

<div 
	class="font-abel h-full min-h-screen flex flex-col md:flex-row mx-auto bg-gray-50 text-zinc-800 dark:bg-slate-900 dark:text-zinc-400 overflow-auto"
	class:invisible={!browser}
>
	<Navbar />
	<div class="flex flex-col flex-auto w-full md:min-h-screen container mx-auto">
		<main class="flex-auto px-4 py-2 shadow-xl ring-1 ring-black dark:ring-zinc-700">
			<slot />
		</main>
		<Footer />
	</div>
</div>
