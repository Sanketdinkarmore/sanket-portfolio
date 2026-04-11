const modules = import.meta.glob('./*.mdx', { eager: true });

export const posts = Object.entries(modules)
  .map(([path, mod]: any) => {
    const slug = path.split('/').pop().replace('.mdx', '');

    return {
      slug,
      meta: mod.meta,
      Component: mod.default,
    };
  })
  .sort((a, b) => 
  new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf()
);