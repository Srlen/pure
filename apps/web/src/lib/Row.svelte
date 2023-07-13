<script lang="ts">
	import type WatchData from './types/watch';
	import { TableBodyRow, TableBodyCell, Button } from 'flowbite-svelte';
	export let watch: WatchData;
</script>

<TableBodyRow>
	<TableBodyCell>
		{watch.name}
	</TableBodyCell>
	<TableBodyCell>
		{watch.theme}
	</TableBodyCell>
</TableBodyRow>
