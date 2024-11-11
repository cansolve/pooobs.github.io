import Markdown from 'markdown-it';
import { Plugin } from 'vite';

declare function localIconLoader(url: string, path: string): string;

declare function groupIconMdPlugin(md: Markdown): void;

interface Options {
    customIcon: Record<string, string>;
}
declare function groupIconVitePlugin(options?: Options): Plugin;

export { type Options, groupIconMdPlugin, groupIconVitePlugin, localIconLoader };
