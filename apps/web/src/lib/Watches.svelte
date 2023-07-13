<script lang="ts">
	import Watch from '$lib/Watch.svelte';
	import type WatchData from './types/watch';
	export let watches: WatchData[]
</script>


{#each watches as watch}
		<div class="flex justify-center items-center flex-auto flex-col">
			<Watch {watch} />
		</div>
ذ{/each}
