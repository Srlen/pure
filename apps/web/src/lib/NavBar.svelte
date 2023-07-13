<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { nav } from './nav';
</script>

<Navbar class="dark:bg-black" let:hidden let:toggle>
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Pure </span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi
			href="/home"
			active={$nav === 0}
			on:click={() => {
				$nav = 0;
			}}>Home</NavLi
		>
		<NavLi
			href="/about"
			active={$nav === 1}
			on:click={() => {
				$nav = 1;
			}}>About</NavLi
		>
		<NavLi
			href="/system"
			active={$nav === 2}
			on:click={() => {
				$nav = 2;
			}}>System</NavLi
		>
		<NavLi
			href="/services"
			active={$nav === 3}
			on:click={() => {
				$nav = 3;
			}}>Services</NavLi
		>
		<NavLi
			href="/dashboard"
			active={$nav === 4}
			on:click={() => {
				$nav = 4;
			}}>Dashboard</NavLi
		>
		<NavLi
			href="/contact"
			active={$nav === 5}
			on:click={() => {
				$nav = 5;
			}}>Contact</NavLi
		>
	</NavUl>
</Navbar>
