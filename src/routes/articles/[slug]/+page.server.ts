import { readFileSync } from 'fs'

export async function load({ params, fetch }){
    const { slug } = params
    return {markdown: readFileSync(`src/articles/${slug}.md`, 'utf8')}
}
