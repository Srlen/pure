<script lang="ts">
	import { Card, Heading, Button } from 'flowbite-svelte';

	let num: number;
	function inc() {
		num = num + Math.random() * 10;
	}
	let clear: any;
	let choose = [dec, inc];
	$: {
		clearInterval(clear);
		clear = setInterval(interval, 5000);
	}
	function loadRandom() {
		return (num = 40 + Math.floor(Math.random() * 100));
	}

	function dec() {
		// decrease the value by randomly generated value in range 1 - 5
		num = num - Math.random() * 10;
	}
	const interval = function () {
		choose[Math.floor(Math.random() * choose.length)]();
		// display (update) it
		num = Math.trunc(num);
		if (num <= 0) {
			// clear interval when number of objects gets to, or below, 0
			clearInterval(clear);
		}
	};
	loadRandom();
</script>

<Card padding="xl" size="lg">
	<div class="flex justify-between items-centermb-4">
		<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Heart Rate</h5>
	</div>
	<Heading tag="h2">{num}/bpm</Heading>
</Card>

<Card padding="xl" size="lg">
	<div class="flex justify-between items-center mb-4">
		<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Sleep</h5>
	</div>
	<Heading tag="h2">9h</Heading>
</Card>

<Card padding="xl" size="lg">
	<div class="flex justify-between items-center mb-4">
		<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Blood Pessure</h5>
	</div>
	<Heading tag="h2">120/80 mmHg</Heading>
</Card>

<Card padding="xl" size="lg">
	<div class="flex justify-between items-center mb-4">
		<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Home Devices</h5>
	</div>
	<Heading tag="h2">Connected</Heading>
</Card>

<Card padding="xl" size="lg">
	<div class="flex justify-between items-center mb-4">
		<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Sensors</h5>
	</div>
	<Heading tag="h2">Connected</Heading>
</Card>

<Card padding="xl" size="lg">
	<div class="flex justify-between items-center mb-4">
		<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Body Sensors</h5>
	</div>
	<Heading tag="h2">Connected</Heading>
	<Button size="sm" class="w-44 mt-4">View More</Button>
</Card>

<Card padding="xl" size="lg">
	<div class="flex justify-between items-center mb-4">
		<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Allergy qrcode</h5>
	</div>
	<Button size="sm" class="w-44 mt-4">QRCODE</Button>
</Card>

<Card padding="xl" size="lg">
	<div class="flex justify-between items-center mb-4">
		<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">BlockChain Auth Id</h5>
	</div>
	<Button size="sm" class="w-44 mt-4">View Id</Button>
</Card>
