<script lang="ts">
    import showdown from 'showdown'
    import { page } from '$app/stores'
    import { base } from '$app/paths';
    import README from '../../../README.md?raw'

    export let markdown = README

    const { pathname } = $page.url
    const html = new showdown.Converter().makeHtml(markdown)
    .replace(/ href=\"/g, ` href="${base}/`)
    .replace(/ src=\"/g, ` src="${base}/`)
    .replaceAll(`${base}/http`, 'http')
    .replace(/\/\/\"/g, `/"`)
    const home = `${base ? base : '/'}`
</script>

<article>
    {#if pathname !== home }
        <p class="text-end mt-3 mb-1" id="home"><a href="{home}" title="На главную"><i class="bi bi-house">&nbsp;На главную</i></a></p>
    {/if}
    {@html html}
</article>    

<style lang="scss">
    #home {
        font-size: smaller;
    }
</style>
