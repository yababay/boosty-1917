<script lang="ts">
    import showdown from 'showdown'
    import { page } from '$app/stores'
    import README from '../../../README.md?raw'
    export let markdown = README, html: string | undefined = undefined
    const { pathname } = $page.url
</script>

<article>
    {#if pathname !== '/'}
        <p class="text-end mt-3 mb-1" id="home"><a href="/" title="На главную"><i class="bi bi-house">&nbsp;На главную</i></a></p>
    {/if}
    {@html html ? html : new showdown.Converter().makeHtml(markdown)}
</article>    

<style lang="scss">
    #home {
        font-size: smaller;
        //margin: 0;
        //padding: 0;
    }
</style>
