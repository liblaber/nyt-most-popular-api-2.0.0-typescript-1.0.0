import { z } from 'zod';

export const getSharedPeriodJsonPeriod = z.enum(['1', '7', '30']);

export type GetSharedPeriodJsonPeriod = z.infer<typeof getSharedPeriodJsonPeriod>;
