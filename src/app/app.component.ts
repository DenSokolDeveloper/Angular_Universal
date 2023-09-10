import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, of } from 'rxjs';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular_universal';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService,
  ) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;

        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
    ).subscribe((data: any) => {
      console.log(data, 'data');
      if (data?.seo) {
        const seoData = data.seo;
        this.seoService.updateTitle(seoData['title']);
        this.seoService.updateMetaTags(seoData['metaTags']);
      }
    });
  }
}
