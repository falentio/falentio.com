<script lang="ts">
	import Icon from "@iconify/svelte"
	import { switchTheme, theme } from "$lib/theme/theme"
</script>

<button on:click={switchTheme} class="h-full w-12">
	{#if $theme === "dark"}
		<Icon class="w-8 h-8 m-auto" icon="carbon:sun" />
	{:else}
		<Icon class="w-8 h-8 m-auto" icon="carbon:moon" />
	{/if}
</button>
