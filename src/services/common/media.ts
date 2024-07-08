import { z } from 'zod';
import { mediaMetadata, mediaMetadataRequest, mediaMetadataResponse } from './media-metadata';

/**
 * The shape of the model inside the application code - what the users use
 */
export const media = z.object({
  type_: z.string().optional(),
  subtype: z.string().optional(),
  caption: z.string().optional(),
  copyright: z.string().optional(),
  approvedForSyndication: z.number().optional(),
  mediaMetadata: z.array(mediaMetadata).optional(),
});

/**
 *
 * @typedef  {Media} media
 * @property {string} - Asset type (e.g. image).
 * @property {string} - Asset subtype (e.g. photo).
 * @property {string} - Media caption.
 * @property {string} - Media credit.
 * @property {number} - Whether media is approved for syndication.
 * @property {MediaMetadata[]} - Media metadata (url, width, height, ...).
 */
export type Media = z.infer<typeof media>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const mediaResponse = z
  .object({
    type: z.string().optional(),
    subtype: z.string().optional(),
    caption: z.string().optional(),
    copyright: z.string().optional(),
    approved_for_syndication: z.number().optional(),
    'media-metadata': z.array(mediaMetadataResponse).optional(),
  })
  .transform((data) => ({
    type_: data['type'],
    subtype: data['subtype'],
    caption: data['caption'],
    copyright: data['copyright'],
    approvedForSyndication: data['approved_for_syndication'],
    mediaMetadata: data['media-metadata'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const mediaRequest = z
  .object({
    type_: z.string().nullish(),
    subtype: z.string().nullish(),
    caption: z.string().nullish(),
    copyright: z.string().nullish(),
    approvedForSyndication: z.number().nullish(),
    mediaMetadata: z.array(mediaMetadataRequest).nullish(),
  })
  .transform((data) => ({
    type: data['type_'],
    subtype: data['subtype'],
    caption: data['caption'],
    copyright: data['copyright'],
    approved_for_syndication: data['approvedForSyndication'],
    'media-metadata': data['mediaMetadata'],
  }));
