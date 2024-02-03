import showdown from 'showdown'
import { ARTICLE_URL_PREFIX } from '$env/static/private'
const converter = new showdown.Converter()

export async function load({ params, fetch }){
    const { slug } = params
    const html = converter.makeHtml(await fetch(`${ARTICLE_URL_PREFIX}/${slug}.md`).then(res => res.text()))
    .replace(/\ src\=\"img/g, ` src="${ARTICLE_URL_PREFIX}/img`)
    return { html }
}
