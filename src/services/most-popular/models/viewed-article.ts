import { z } from 'zod';
import { media, mediaRequest, mediaResponse } from '../../common/media';

/**
 * The shape of the model inside the application code - what the users use
 */
export const viewedArticle = z.object({
  url: z.string().optional(),
  adxKeywords: z.string().optional(),
  column: z.string().optional().nullable(),
  section: z.string().optional(),
  byline: z.string().optional(),
  type_: z.string().optional(),
  title: z.string().optional(),
  abstract: z.string().optional(),
  publishedDate: z.string().optional(),
  source: z.string().optional(),
  updated: z.string().optional(),
  subsection: z.string().optional(),
  nytdsection: z.string().optional(),
  etaId: z.number().optional(),
  id: z.number().optional(),
  assetId: z.number().optional(),
  desFacet: z.array(z.string()).optional(),
  orgFacet: z.array(z.string()).optional(),
  perFacet: z.array(z.string()).optional(),
  geoFacet: z.array(z.string()).optional(),
  media: z.array(media).optional(),
  uri: z.string().optional(),
});

/**
 *
 * @typedef  {ViewedArticle} viewedArticle
 * @property {string} - Article's URL.
 * @property {string} - Semicolon separated list of keywords.
 * @property {string} - Deprecated. Set to null.
 * @property {string} - Article's section (e.g. Sports).
 * @property {string} - Article's byline (e.g. By Thomas L. Friedman).
 * @property {string} - Asset type (e.g. Article, Interactive, ...).
 * @property {string} - Article's headline (e.g. When the Cellos Play, the Cows Come Home).
 * @property {string} - Brief summary of the article.
 * @property {string} - When the article was published on the web (e.g. 2021-04-19).
 * @property {string} - Publisher (e.g. New York Times).
 * @property {string} - When the article was last updated (e.g. 2021-05-12 06:32:03).
 * @property {string}
 * @property {string} - Article's section (e.g. sports).
 * @property {number}
 * @property {number} - Asset ID number (e.g. 100000007772696).
 * @property {number} - Asset ID number (e.g. 100000007772696).
 * @property {string[]} - Array of description facets (e.g. Quarantine (Life and Culture)).
 * @property {string[]} - Array of organization facets (e.g. Sullivan Street Bakery).
 * @property {string[]} - Array of person facets (e.g. Bittman, Mark).
 * @property {string[]} - Array of geographic facets (e.g. Canada).
 * @property {Media[]} - Array of images.
 * @property {string} - An article's globally unique identifier.
 */
export type ViewedArticle = z.infer<typeof viewedArticle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const viewedArticleResponse = z
  .object({
    url: z.string().optional(),
    adx_keywords: z.string().optional(),
    column: z.string().optional().nullable(),
    section: z.string().optional(),
    byline: z.string().optional(),
    type: z.string().optional(),
    title: z.string().optional(),
    abstract: z.string().optional(),
    published_date: z.string().optional(),
    source: z.string().optional(),
    updated: z.string().optional(),
    subsection: z.string().optional(),
    nytdsection: z.string().optional(),
    eta_id: z.number().optional(),
    id: z.number().optional(),
    asset_id: z.number().optional(),
    des_facet: z.array(z.string()).optional(),
    org_facet: z.array(z.string()).optional(),
    per_facet: z.array(z.string()).optional(),
    geo_facet: z.array(z.string()).optional(),
    media: z.array(mediaResponse).optional(),
    uri: z.string().optional(),
  })
  .transform((data) => ({
    url: data['url'],
    adxKeywords: data['adx_keywords'],
    column: data['column'],
    section: data['section'],
    byline: data['byline'],
    type_: data['type'],
    title: data['title'],
    abstract: data['abstract'],
    publishedDate: data['published_date'],
    source: data['source'],
    updated: data['updated'],
    subsection: data['subsection'],
    nytdsection: data['nytdsection'],
    etaId: data['eta_id'],
    id: data['id'],
    assetId: data['asset_id'],
    desFacet: data['des_facet'],
    orgFacet: data['org_facet'],
    perFacet: data['per_facet'],
    geoFacet: data['geo_facet'],
    media: data['media'],
    uri: data['uri'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const viewedArticleRequest = z
  .object({
    url: z.string().nullish(),
    adxKeywords: z.string().nullish(),
    column: z.string().nullish(),
    section: z.string().nullish(),
    byline: z.string().nullish(),
    type_: z.string().nullish(),
    title: z.string().nullish(),
    abstract: z.string().nullish(),
    publishedDate: z.string().nullish(),
    source: z.string().nullish(),
    updated: z.string().nullish(),
    subsection: z.string().nullish(),
    nytdsection: z.string().nullish(),
    etaId: z.number().nullish(),
    id: z.number().nullish(),
    assetId: z.number().nullish(),
    desFacet: z.array(z.string()).nullish(),
    orgFacet: z.array(z.string()).nullish(),
    perFacet: z.array(z.string()).nullish(),
    geoFacet: z.array(z.string()).nullish(),
    media: z.array(mediaRequest).nullish(),
    uri: z.string().nullish(),
  })
  .transform((data) => ({
    url: data['url'],
    adx_keywords: data['adxKeywords'],
    column: data['column'],
    section: data['section'],
    byline: data['byline'],
    type: data['type_'],
    title: data['title'],
    abstract: data['abstract'],
    published_date: data['publishedDate'],
    source: data['source'],
    updated: data['updated'],
    subsection: data['subsection'],
    nytdsection: data['nytdsection'],
    eta_id: data['etaId'],
    id: data['id'],
    asset_id: data['assetId'],
    des_facet: data['desFacet'],
    org_facet: data['orgFacet'],
    per_facet: data['perFacet'],
    geo_facet: data['geoFacet'],
    media: data['media'],
    uri: data['uri'],
  }));
