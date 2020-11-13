import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HttpService } from '../http.service';

describe('HttpService', () => {
    let service: HttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [HttpService], imports: [HttpClientModule] });
        service = TestBed.inject(HttpService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should set header', () => {
        const key = 'testKey';
        const value = 'testValue';

        service.setHeader(key, value);

        expect(service.headers[key]).toEqual(value);
    });

    it('should delete header', () => {
        const key = 'testKey';
        const value = 'testValue';

        service.headers[key] = value;
        expect(service.headers[key]).toEqual(value);

        service.deleteHeader(key);

        expect(service.headers[key]).toBeUndefined();
    });
});
