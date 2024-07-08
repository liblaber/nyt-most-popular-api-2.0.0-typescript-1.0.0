import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { MostPopularService } from './services/most-popular';
export type { GetEmailedPeriodJsonPeriod } from './services/most-popular/models';
export class NytMostPopular {
  public readonly mostPopular: MostPopularService;

  constructor(public config: SdkConfig) {
    const baseUrl = config.environment || config.baseUrl || Environment.DEFAULT;
    this.config = {
      ...config,
      baseUrl,
    };
    this.mostPopular = new MostPopularService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.mostPopular.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.mostPopular.baseUrl = environment;
  }

  set apiKey(apiKey: string) {
    this.mostPopular.apiKey = apiKey;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
