import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Client,
  },

  // Working
  // {
  //   path: 'offers/:slug',
  //   renderMode: RenderMode.Server,
  // },

  // Not working
  // {
  //   path: ':slug',
  //   renderMode: RenderMode.Server,
  // },

  // Not working
  // {
  //   path: ':slug/:attribute',
  //   renderMode: RenderMode.Server,
  // },

  // Default
  {
    path: '**',
    renderMode: RenderMode.Client,
  },

  // Not working
  // {
  //   path: '**',
  //   renderMode: RenderMode.Prerender,
  //   fallback: PrerenderFallback.Client,
  //   getPrerenderParams(): Promise<Record<string, string>[]> {
  //     return Promise.resolve(['volvo', 'toyota'].map((slug) => ({ slug })));
  //   },
  // },

  // Not working in local development, in server works as fallback for prerenderer and user
  // {
  //   path: '**',
  //   renderMode: RenderMode.Prerender,
  //   fallback: PrerenderFallback.Client,
  //   getPrerenderParams(): Promise<Record<string, string>[]> {
  //     const offers = [{ slug: 'volvo', attribute: 'black' }];
  //     return Promise.resolve(
  //       offers.map(({ slug, attribute }) => ({
  //         slug,
  //         attribute,
  //       }))
  //     );
  //   },
  // },
];
