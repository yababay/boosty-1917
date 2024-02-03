<script lang="ts">
    import Main from '$lib/components/Main.svelte'
    export let data: {markdown: string}
    const { markdown } = data
</script>

<Main {markdown} />
