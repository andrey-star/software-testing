import {HttpClient} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';
import {of} from 'rxjs';

import {StickerService} from './sticker.service';
import SpyObj = jasmine.SpyObj;

describe('StickerService', () => {
  let service: StickerService;
  let http: SpyObj<HttpClient>;
  beforeEach(() => {
    http = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [{provide: HttpClient, useValue: http}],
    });
    service = TestBed.inject(StickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('gets packs', (done) => {
    const expectedPacks = [
      {
        id: 1,
        name: 'test pack',
        author: '@test',
        description: 'Funny test pack',
        previewUrl: 'https://abc.com',
        stickerUrls: [],
      },
      {
        id: 2,
        name: 'test pack 2',
        author: '@test',
        description: 'Funny test pack',
        previewUrl: 'https://abc.com',
        stickerUrls: [],
      },
    ];
    http.get.and.returnValue(of(expectedPacks));

    service.getStickerPacks().subscribe((packs) => {
      expect(packs).toEqual(expectedPacks, 'expected packs');
      done();
    }, done.fail);
    expect(http.get.calls.count()).toBe(1, 'one call');
    expect(http.get.calls.argsFor(0)[0]).toContain('/packs', 'api endpoint');
  });

  it('gets 1 pack by id', (done) => {
    const expectedPack = {
      id: 1,
      name: 'test pack',
      author: '@test',
      description: 'Funny test pack',
      previewUrl: 'https://abc.com',
      stickerUrls: [],
    };
    http.get.and.returnValue(of(expectedPack));

    service.getStickerPack(1).subscribe((pack) => {
      expect(pack).toEqual(expectedPack, 'expected pack');
      done();
    }, done.fail);
    expect(http.get.calls.count()).toBe(1, 'one call');
    expect(http.get.calls.argsFor(0)[0]).toContain(
      '/pack/1',
      'api endpoint'
    );
  });
});
