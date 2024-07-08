import { z } from 'zod';
import { emailedArticle, emailedArticleRequest, emailedArticleResponse } from './emailed-article';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getEmailedPeriodJsonOkResponse = z.object({
  status: z.string().optional(),
  copyright: z.string().optional(),
  numResults: z.number().optional(),
  results: z.array(emailedArticle).optional(),
});

/**
 *
 * @typedef  {GetEmailedPeriodJsonOkResponse} getEmailedPeriodJsonOkResponse
 * @property {string} - API response status (e.g. OK).
 * @property {string} - Copyright message.
 * @property {number} - Number of articles in the results (e.g. 20).
 * @property {EmailedArticle[]} - Array of articles.
 */
export type GetEmailedPeriodJsonOkResponse = z.infer<typeof getEmailedPeriodJsonOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getEmailedPeriodJsonOkResponseResponse = z
  .object({
    status: z.string().optional(),
    copyright: z.string().optional(),
    num_results: z.number().optional(),
    results: z.array(emailedArticleResponse).optional(),
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
export const getEmailedPeriodJsonOkResponseRequest = z
  .object({
    status: z.string().nullish(),
    copyright: z.string().nullish(),
    numResults: z.number().nullish(),
    results: z.array(emailedArticleRequest).nullish(),
  })
  .transform((data) => ({
    status: data['status'],
    copyright: data['copyright'],
    num_results: data['numResults'],
    results: data['results'],
  }));
