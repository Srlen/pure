<script>
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		SidebarDropdownItem,
		SidebarDropdownWrapper
	} from 'flowbite-svelte';
	let spanClass = 'flex-1 ml-3 whitespace-nowrap';
</script>

<div class="container flex justify-center">
	<div
		class="container grid grid-cols-4 border border-gray p-10 rounded-lg ml-10 gap-5 flex-wrap overflow-x-auto"
	>
		<slot />
	</div>
</div>
