import { z } from 'zod';

export const getSharedByPeriodShareTypeJsonPeriod = z.enum(['1', '7', '30']);

export type GetSharedByPeriodShareTypeJsonPeriod = z.infer<
  typeof getSharedByPeriodShareTypeJsonPeriod
>;
