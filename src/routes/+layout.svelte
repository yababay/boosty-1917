<script lang="ts">
    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import '../lib/styles/index.scss'
</script>

<header>
    <Header />
</header>

<main>
    <slot />
</main>

<footer>
    <Footer />
</footer>
