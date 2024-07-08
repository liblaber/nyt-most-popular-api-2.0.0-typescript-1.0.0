import { z } from 'zod';

export const getEmailedPeriodJsonPeriod = z.enum(['1', '7', '30']);

export type GetEmailedPeriodJsonPeriod = z.infer<typeof getEmailedPeriodJsonPeriod>;
