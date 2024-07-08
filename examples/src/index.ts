import { GetEmailedPeriodJsonPeriod, NytMostPopular } from 'nyt-most-popular';

(async () => {
  const nytMostPopular = new NytMostPopular({
    apiKey: 'YOUR_API_KEY',
  });

  const period: GetEmailedPeriodJsonPeriod = '1';

  const { data } = await nytMostPopular.mostPopular.getEmailedPeriodJson(period);

  console.log(data);
})();
