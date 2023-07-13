import type { PageServerLoad} from "./$types"
import client from "$lib/client";
import type WatchData from "$lib/types/watch";

async function getWatches(): Promise<WatchData[]> {
    const res = await client.watch.getWatches();
    const { data } = res;
    return data;
}
export const load = (() => {
    return { watches: getWatches()}
}) satisfies PageServerLoad