<script>
  let count = 0;

  function increment() {
    count += 1;
  }
  function decrement() {
    count -= 1;
  }
</script>

<div>
  <h2>Svelte Counter</h2>
  <p>Count: {count}</p>
  <button type="button" on:click={increment}>Increment</button>
  <button type="button" on:click={decrement}>Decrement</button>
</div>
