# MostPopularService

A list of all methods in the `MostPopularService` service. Click on the method name to view detailed information about that method.

| Methods                                                                       | Description                                                                                                                         |
| :---------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| [get_emailed_period_json](#get_emailed_period_json)                           | Returns an array of the most emailed articles on NYTimes.com for specified period of time (1 day, 7 days, or 30 days).              |
| [get_shared_period_json](#get_shared_period_json)                             | Returns an array of the most shared articles on NYTimes.com for specified period of time (1 day, 7 days, or 30 days).               |
| [get_shared_by_period_share_type_json](#get_shared_by_period_share_type_json) | Returns an array of the most shared articles by share type on NYTimes.com for specified period of time (1 day, 7 days, or 30 days). |
| [get_viewed_period_json](#get_viewed_period_json)                             | Returns an array of the most viewed articles on NYTimes.com for specified period of time (1 day, 7 days, or 30 days).               |

## get_emailed_period_json

Returns an array of the most emailed articles on NYTimes.com for specified period of time (1 day, 7 days, or 30 days).

- HTTP Method: `GET`
- Endpoint: `/emailed/{period}.json`

**Parameters**

| Name   | Type                                                                  | Required | Description                    |
| :----- | :-------------------------------------------------------------------- | :------- | :----------------------------- |
| period | [GetEmailedPeriodJsonPeriod](../models/GetEmailedPeriodJsonPeriod.md) | ✅        | Time period: 1, 7, or 30 days. |

**Return Type**

`GetEmailedPeriodJsonOkResponse`

**Example Usage Code Snippet**

```typescript
import { NytMostPopular, GetEmailedPeriodJsonPeriod } from 'nyt-most-popular';

(async () => {
  const nytMostPopular = new NytMostPopular({});

  const period: GetEmailedPeriodJsonPeriod = '1';

  const { data } = await nytMostPopular.mostPopular.getEmailedPeriodJson(period);

  console.log(data);
})();
```

## get_shared_period_json

Returns an array of the most shared articles on NYTimes.com for specified period of time (1 day, 7 days, or 30 days).

- HTTP Method: `GET`
- Endpoint: `/shared/{period}.json`

**Parameters**

| Name   | Type                                                                | Required | Description                    |
| :----- | :------------------------------------------------------------------ | :------- | :----------------------------- |
| period | [GetSharedPeriodJsonPeriod](../models/GetSharedPeriodJsonPeriod.md) | ✅        | Time period: 1, 7, or 30 days. |

**Return Type**

`GetSharedPeriodJsonOkResponse`

**Example Usage Code Snippet**

```typescript
import { NytMostPopular, GetEmailedPeriodJsonPeriod } from 'nyt-most-popular';

(async () => {
  const nytMostPopular = new NytMostPopular({});

  const period: GetEmailedPeriodJsonPeriod = '1';

  const { data } = await nytMostPopular.mostPopular.getSharedPeriodJson(period);

  console.log(data);
})();
```

## get_shared_by_period_share_type_json

Returns an array of the most shared articles by share type on NYTimes.com for specified period of time (1 day, 7 days, or 30 days).

- HTTP Method: `GET`
- Endpoint: `/shared/{period}/{share_type}.json`

**Parameters**

| Name      | Type                                                                                      | Required | Description                    |
| :-------- | :---------------------------------------------------------------------------------------- | :------- | :----------------------------- |
| period    | [GetSharedByPeriodShareTypeJsonPeriod](../models/GetSharedByPeriodShareTypeJsonPeriod.md) | ✅        | Time period: 1, 7, or 30 days. |
| shareType | [ShareType](../models/ShareType.md)                                                       | ✅        | Share type: facebook.          |

**Return Type**

`GetSharedByPeriodShareTypeJsonOkResponse`

**Example Usage Code Snippet**

```typescript
import { NytMostPopular } from 'nyt-most-popular';

(async () => {
  const nytMostPopular = new NytMostPopular({});

  const period = GetSharedByPeriodShareTypeJsonPeriod.1;
const shareType = ShareType.facebook;

  const { data } = await nytMostPopular.mostPopular.getSharedByPeriodShareTypeJson(
  ,

);

  console.log(data);
})();
```

## get_viewed_period_json

Returns an array of the most viewed articles on NYTimes.com for specified period of time (1 day, 7 days, or 30 days).

- HTTP Method: `GET`
- Endpoint: `/viewed/{period}.json`

**Parameters**

| Name   | Type                                                                | Required | Description                    |
| :----- | :------------------------------------------------------------------ | :------- | :----------------------------- |
| period | [GetViewedPeriodJsonPeriod](../models/GetViewedPeriodJsonPeriod.md) | ✅        | Time period: 1, 7, or 30 days. |

**Return Type**

`GetViewedPeriodJsonOkResponse`

**Example Usage Code Snippet**

```typescript
import { NytMostPopular } from 'nyt-most-popular';

(async () => {
  const nytMostPopular = new NytMostPopular({});

  const period = GetViewedPeriodJsonPeriod.1;

  const { data } = await nytMostPopular.mostPopular.getViewedPeriodJson(

);

  console.log(data);
})();
```
