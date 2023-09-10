import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    data: {
      seo: {
        title: 'Den SEO',
        metaTags: [
          { name: 'title', content: 'Den SEO' },
          { name: 'description', content: 'Den SEO ⚡️Den SEO  ⚡️ ➨ Den SEO ❗ Den SEO ❗  Den SEO. Angular Front-end разработчик.' },
          { name: 'image', content: 'https://angular-universal-olive.vercel.app/assets/images/meta-images/image-preview.jpg' },
          { property: 'og:site_name', content: 'Den SEO' },
          { property: 'og:type', content: 'article' },
          { property: 'og:title', content: 'Front-end Den SEO' },
          { property: 'og:description', content: 'Den SEO Den SEO Den SEO Den SEO Den SEO Den SEO' },
          { property: 'og:url', content: 'https://angular-universal-olive.vercel.app' },
          { property: 'og:image', content: 'https://angular-universal-olive.vercel.app/assets/images/meta-images/image-preview.jpg' },
          { property: 'og:image:secure_url', content: 'https://angular-universal-olive.vercel.app/images/meta-images/image-preview.jpg' },
          { property: 'og:image:type', content: 'image/jpeg' },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:domain', content: 'angular-universal-olive.vercel.app' },
          { name: 'twitter:title', content: 'Den SEO' },
          { name: 'twitter:description', content: 'Den SEO' },
          { name: 'twitter:image', content: 'https://angular-universal-olive.vercel.app/assets/images/meta-images/image-preview.jpg' },
        ],
      },
    },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
