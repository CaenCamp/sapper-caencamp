<script>
	import SiteHeader from '../components/SiteHeader.svelte';
	import SiteFooter from '../components/SiteFooter.svelte';
	export let segment;
</script>

<SiteHeader {segment}/>

<main>
	<slot></slot>
</main>

<SiteFooter />