import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banner } from '../models/banner';

const bannerUrl: string = 'http://localhost:12735/api/banner';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor(private httpBanner: HttpClient) { }

  getAllBanners() {
    return this.httpBanner.get(bannerUrl);
  }

  getBanner(id: number){
    return this.httpBanner.get(`${bannerUrl}/${id}`);
  }

  createBanner(data: Banner){
    return this.httpBanner.post(bannerUrl, data);
  }

  updateBanner(id: number, data: Banner){
    return this.httpBanner.put(`${bannerUrl}/${id}`, data);
  }

  deleteBanner(id: number){
    return this.httpBanner.delete(`${bannerUrl}/${id}`);
  }

  getHussarsUnderBanner(bannerid: number){
    return this.httpBanner.get(`${bannerUrl}/getHussarsUnderBanner/${bannerid}`);
  }
}
