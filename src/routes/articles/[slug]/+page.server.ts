import { readFileSync } from 'fs'

export async function load({ params, fetch }){
    const { slug } = params
    return {markdown: readFileSync(`src/markdown/${slug}.md`, 'utf8')}
}
