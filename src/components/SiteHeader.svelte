<script>
	export let segment;
</script>


<header class="flex">
  <div class="w-1/3">
    <img src="~/static/logos/cc-bg-white.png" alt="Logo des CaenCamps">
  </div>

  <nav class="w-2/3">
    <ul>
      <li>
        <a class='{segment === undefined ? "selected" : ""}' href='.'>
          home
        </a>
      </li>
      <li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
          the blog data when we hover over the link or tap it on a touchscreen -->
      <li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>

      <li><a class='{segment === "test" ? "selected" : ""}' href='test'>test</a></li>
    </ul>
  </nav>
</header>