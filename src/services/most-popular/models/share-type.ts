import { z } from 'zod';

export const shareType = z.enum(['facebook']);

export type ShareType = z.infer<typeof shareType>;
