import { GetEmailedPeriodJsonPeriod, NytMostPopular } from 'nyt-most-popular';


(async () => {
  const nytMostPopular = new NytMostPopular({
    apiKey: 'PzqYDMKqGtQgq8ec9ADusKwDXkI9dyn1',
  });

  const period: GetEmailedPeriodJsonPeriod = '1';

  const { data } = await nytMostPopular.mostPopular.getEmailedPeriodJson(period);

  console.log(data);
})();
