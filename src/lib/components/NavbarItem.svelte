<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	export let text: string;
	export let icon: string = 'mdi:home';
	export let href: string;
	$: current = $page.url.pathname === href;
</script>

<div
	class="h-max w-12 mx-2 text-center md:my-2 transition-transform ease-in-out duration-300"
	class:text-sky-500={current}
	class:scale-110={current}
>
	<a {href} class="w-full h-full">
		<Icon {icon} class="h-8 w-8 mx-auto" />
		<span> {text} </span>
	</a>
</div>
