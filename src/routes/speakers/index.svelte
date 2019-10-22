<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`speakers.json`).then(r => r.json()).then(speakers => {
			return { speakers };
		});
  }
</script>

<script>
	export let speakers;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Les Speakers</title>
</svelte:head>

<h1>Les Speakers</h1>

<ul>
	{#each speakers as speaker}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='speakers/{speaker.attributes.slug}'>{speaker.attributes.firstName} {speaker.attributes.lastName}</a></li>
	{/each}
</ul>