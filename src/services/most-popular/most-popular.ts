import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  GetEmailedPeriodJsonOkResponse,
  GetEmailedPeriodJsonPeriod,
  GetSharedByPeriodShareTypeJsonOkResponse,
  GetSharedByPeriodShareTypeJsonPeriod,
  GetSharedPeriodJsonOkResponse,
  GetSharedPeriodJsonPeriod,
  GetViewedPeriodJsonOkResponse,
  GetViewedPeriodJsonPeriod,
  ShareType,
  getEmailedPeriodJsonOkResponseResponse,
  getSharedByPeriodShareTypeJsonOkResponseResponse,
  getSharedPeriodJsonOkResponseResponse,
  getViewedPeriodJsonOkResponseResponse,
} from './models';

export class MostPopularService extends BaseService {
  /**
   * Returns an array of the most emailed articles on NYTimes.com for specified period of time (1 day, 7 days, or 30 days).
   * @param {GetEmailedPeriodJsonPeriod} period - Time period: 1, 7, or 30 days.
   * @returns {Promise<HttpResponse<GetEmailedPeriodJsonOkResponse>>} An array of articles.
   */
  async getEmailedPeriodJson(
    period: GetEmailedPeriodJsonPeriod,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetEmailedPeriodJsonOkResponse>> {
    const path = this.client.buildPath('/emailed/{period}.json', { period: period });
    const options: any = {
      responseSchema: getEmailedPeriodJsonOkResponseResponse,
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.get(path, options);
  }

  /**
   * Returns an array of the most shared articles on NYTimes.com for specified period of time (1 day, 7 days, or 30 days).
   * @param {GetSharedPeriodJsonPeriod} period - Time period: 1, 7, or 30 days.
   * @returns {Promise<HttpResponse<GetSharedPeriodJsonOkResponse>>} An array of articles.
   */
  async getSharedPeriodJson(
    period: GetSharedPeriodJsonPeriod,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetSharedPeriodJsonOkResponse>> {
    const path = this.client.buildPath('/shared/{period}.json', { period: period });
    const options: any = {
      responseSchema: getSharedPeriodJsonOkResponseResponse,
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.get(path, options);
  }

  /**
   * Returns an array of the most shared articles by share type on NYTimes.com for specified period of time (1 day, 7 days, or 30 days).
   * @param {GetSharedByPeriodShareTypeJsonPeriod} period - Time period: 1, 7, or 30 days.
   * @param {ShareType} shareType - Share type: facebook.
   * @returns {Promise<HttpResponse<GetSharedByPeriodShareTypeJsonOkResponse>>} An array of articles.
   */
  async getSharedByPeriodShareTypeJson(
    period: GetSharedByPeriodShareTypeJsonPeriod,
    shareType: ShareType,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetSharedByPeriodShareTypeJsonOkResponse>> {
    const path = this.client.buildPath('/shared/{period}/{share_type}.json', {
      period: period,
      share_type: shareType,
    });
    const options: any = {
      responseSchema: getSharedByPeriodShareTypeJsonOkResponseResponse,
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.get(path, options);
  }

  /**
   * Returns an array of the most viewed articles on NYTimes.com for specified period of time (1 day, 7 days, or 30 days).
   * @param {GetViewedPeriodJsonPeriod} period - Time period: 1, 7, or 30 days.
   * @returns {Promise<HttpResponse<GetViewedPeriodJsonOkResponse>>} An array of articles.
   */
  async getViewedPeriodJson(
    period: GetViewedPeriodJsonPeriod,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetViewedPeriodJsonOkResponse>> {
    const path = this.client.buildPath('/viewed/{period}.json', { period: period });
    const options: any = {
      responseSchema: getViewedPeriodJsonOkResponseResponse,
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.get(path, options);
  }
}
