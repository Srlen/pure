<script lang="ts">
    import Watch from "$lib/Watch.svelte";
    import client from "$lib/client";
    async function getWatches() {
            const res = await client.watch.getWatches()
        const { data } = res
        return data
    }

</script>


{#await getWatches()}
<h1>Fetching</h1>
{:then watches}
{#each watches as watch}
    <Watch {watch}/>
{/each}
{:catch error}
<h1>Error</h1>
<p>{error}</p>
{/await}