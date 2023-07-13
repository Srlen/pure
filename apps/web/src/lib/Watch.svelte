<script lang="ts">
	import type WatchData from './types/watch';
	import client from './client';
	import { Button, Card, Input } from 'flowbite-svelte';
	export let watch: WatchData;
	let show = true;
	let showInput = false;
	let rename = '';
	async function deleteWatch() {
		await client.watch.deleteWatch(watch.id);
		show = false;
	}

	async function updateWatchName() {
		await client.watch.updateWatch({
			id: watch.id,
			theme: watch.theme,
			name: rename
		});
	}
	$: ({ name } = watch);
</script>

{#if show}
	<Card class="dark:bg-black">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
		<div class="container flex">
			<Input
				type="text"
				on:focus={() => (showInput = true)}
				placeholder="Rename"
				bind:value={rename}
				class="w-40"
			/>
			{#if showInput}
				<Button on:click={updateWatchName}>Rename</Button>
			{/if}
			<Button on:click={deleteWatch} class="dark:text-white w-fit">Delete</Button>
		</div>
	</Card>
{/if}
