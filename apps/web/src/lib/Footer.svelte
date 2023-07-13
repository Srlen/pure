<script>
	import { Footer, FooterLinkGroup, FooterLink, FooterCopyright } from 'flowbite-svelte';
</script>

<Footer class=" bottom-0 left-0 z-20 w-full dark:bg-black">
	<FooterCopyright href="/" by="Pure™" year={new Date().getFullYear()} />
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<FooterLink href="/about">About</FooterLink>
		<FooterLink href="/privacy">Privacy Policy</FooterLink>
		<FooterLink href="/Licensing">Licensing</FooterLink>
		<FooterLink href="/contact">Contact</FooterLink>
	</FooterLinkGroup>
</Footer>
