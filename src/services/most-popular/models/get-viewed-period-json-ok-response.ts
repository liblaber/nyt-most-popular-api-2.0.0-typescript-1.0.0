import { z } from 'zod';
import { viewedArticle, viewedArticleRequest, viewedArticleResponse } from './viewed-article';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getViewedPeriodJsonOkResponse = z.object({
  status: z.string().optional(),
  copyright: z.string().optional(),
  numResults: z.number().optional(),
  results: z.array(viewedArticle).optional(),
});

/**
 *
 * @typedef  {GetViewedPeriodJsonOkResponse} getViewedPeriodJsonOkResponse
 * @property {string} - API response status (e.g. OK).
 * @property {string} - Copyright message.
 * @property {number} - Number of articles in the results (e.g. 20).
 * @property {ViewedArticle[]} - Array of articles.
 */
export type GetViewedPeriodJsonOkResponse = z.infer<typeof getViewedPeriodJsonOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getViewedPeriodJsonOkResponseResponse = z
  .object({
    status: z.string().optional(),
    copyright: z.string().optional(),
    num_results: z.number().optional(),
    results: z.array(viewedArticleResponse).optional(),
  })
  .transform((data) => ({
    status: data['status'],
    copyright: data['copyright'],
    numResults: data['num_results'],
    results: data['results'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getViewedPeriodJsonOkResponseRequest = z
  .object({
    status: z.string().nullish(),
    copyright: z.string().nullish(),
    numResults: z.number().nullish(),
    results: z.array(viewedArticleRequest).nullish(),
  })
  .transform((data) => ({
    status: data['status'],
    copyright: data['copyright'],
    num_results: data['numResults'],
    results: data['results'],
  }));
