import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  public updateTitle(title: string): void {
    this.title.setTitle(title);
  }

  public updateMetaTags(metaTags: MetaDefinition[]): void {
    metaTags.forEach(m=> this.meta.updateTag(m));
  }
}
