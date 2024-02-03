<script lang="ts">
    import showdown from 'showdown'
    import README from '../../../README.md?raw'
    export let markdown = README, html: string | undefined = undefined
</script>

<article>
    {@html html ? html : new showdown.Converter().makeHtml(markdown)}
</article>    
