import { z } from 'zod';
import {
  sharedArticle,
  sharedArticleRequest,
  sharedArticleResponse,
} from '../../common/shared-article';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getSharedPeriodJsonOkResponse = z.object({
  status: z.string().optional(),
  copyright: z.string().optional(),
  numResults: z.number().optional(),
  results: z.array(sharedArticle).optional(),
});

/**
 *
 * @typedef  {GetSharedPeriodJsonOkResponse} getSharedPeriodJsonOkResponse
 * @property {string} - API response status (e.g. OK).
 * @property {string} - Copyright message.
 * @property {number} - Number of articles in the results (e.g. 20).
 * @property {SharedArticle[]} - Array of articles.
 */
export type GetSharedPeriodJsonOkResponse = z.infer<typeof getSharedPeriodJsonOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getSharedPeriodJsonOkResponseResponse = z
  .object({
    status: z.string().optional(),
    copyright: z.string().optional(),
    num_results: z.number().optional(),
    results: z.array(sharedArticleResponse).optional(),
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
export const getSharedPeriodJsonOkResponseRequest = z
  .object({
    status: z.string().nullish(),
    copyright: z.string().nullish(),
    numResults: z.number().nullish(),
    results: z.array(sharedArticleRequest).nullish(),
  })
  .transform((data) => ({
    status: data['status'],
    copyright: data['copyright'],
    num_results: data['numResults'],
    results: data['results'],
  }));
