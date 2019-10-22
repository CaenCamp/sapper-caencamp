<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`speakers/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { speaker: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
  export let speaker;
</script>

<svelte:head>
	<title>{speaker.attributes.firstName}</title>
</svelte:head>

<div class="container flex mx-auto">
  <div class="w-1/3 text-right">
    <img class="rounded-full w-40 h-40 inline mr-8" 
      src='speakers/{speaker.attributes.picture}' 
      alt='Picture of {speaker.attributes.firstName} {speaker.attributes.lastName}' />
  </div>

  <div class="w-2/3">
    <h1 class="text-3xl font-extrabold">{speaker.attributes.firstName} {speaker.attributes.lastName}</h1>

    <div class=''>
      {@html speaker.html}
    </div>
  </div>
  
</div>
