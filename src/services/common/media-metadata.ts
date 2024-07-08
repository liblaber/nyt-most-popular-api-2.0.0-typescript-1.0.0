import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const mediaMetadata = z.object({
  url: z.string().optional(),
  format: z.string().optional(),
  height: z.number().optional(),
  width: z.number().optional(),
});

/**
 *
 * @typedef  {MediaMetadata} mediaMetadata
 * @property {string} - Image's URL.
 * @property {string} - Image's crop name.
 * @property {number} - Image's height (e.g. 293).
 * @property {number} - Image's width (e.g. 440).
 */
export type MediaMetadata = z.infer<typeof mediaMetadata>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const mediaMetadataResponse = z
  .object({
    url: z.string().optional(),
    format: z.string().optional(),
    height: z.number().optional(),
    width: z.number().optional(),
  })
  .transform((data) => ({
    url: data['url'],
    format: data['format'],
    height: data['height'],
    width: data['width'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const mediaMetadataRequest = z
  .object({
    url: z.string().nullish(),
    format: z.string().nullish(),
    height: z.number().nullish(),
    width: z.number().nullish(),
  })
  .transform((data) => ({
    url: data['url'],
    format: data['format'],
    height: data['height'],
    width: data['width'],
  }));
