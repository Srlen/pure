<script lang="ts">
	import type { PageServerData } from './$types';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Checkbox,
		TableSearch,
		Button
	} from 'flowbite-svelte';
	import Row from '$lib/Row.svelte';
	export let data: PageServerData;
</script>

<div class="container flex justify-center items-center">
	<Table shadow>
		<TableHead>
			<TableHeadCell>Name</TableHeadCell>
			<TableHeadCell>Theme</TableHeadCell>
			<TableHeadCell />
		</TableHead>
		<TableBody>
			{#each data.watches as watch}
				<Row {watch} />
			{/each}
		</TableBody>
	</Table>
</div>
