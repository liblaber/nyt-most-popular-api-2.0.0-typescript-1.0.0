import { z } from 'zod';

export const getViewedPeriodJsonPeriod = z.enum(['1', '7', '30']);

export type GetViewedPeriodJsonPeriod = z.infer<typeof getViewedPeriodJsonPeriod>;
