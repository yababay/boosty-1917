<script lang="ts">
    import Main from '$lib/components/Main.svelte'
    export let data: {html: string}
    const { html } = data
</script>

<Main {html} />
