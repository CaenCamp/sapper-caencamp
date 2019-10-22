<script>
	export let segment;
</script>

<header class="flex mb-8">
  <div class="w-1/3">
    <img class="h-16" src="logos/cc-logo-bg-white.png" alt="Logo des CaenCamps">
  </div>

  <nav class="w-2/3">
    <ul class="flex">
      <li class="w-1/4 mt-4 {segment === undefined ? "border-b-2 border-gray-800" : "border-b"}">
        <a href='.'>
          Accueil
        </a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
          the blog data when we hover over the link or tap it on a touchscreen -->
      <li class="w-1/4 mt-4 {segment === "speakers" ? "border-b-2 border-gray-800" : "border-b"}">
        <a rel=prefetch href='speakers'>
          Les speakers
        </a>
      </li>

    </ul>
  </nav>
</header>
