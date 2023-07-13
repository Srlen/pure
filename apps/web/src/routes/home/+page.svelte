<script lang="ts">
	import { Video, Heading } from 'flowbite-svelte';
	import src from '$lib/assests/final.mp4';
</script>

<div class="container flex flex-col justify-around gap-24 items-center">
	<Heading
		tag="h1"
		class="text-center"
		customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl "
		>We invest in the world’s potential</Heading
	>
	<Video {src} repeat controls autoplay class="h-auto w-[800px] rounded-xl " />
</div>
