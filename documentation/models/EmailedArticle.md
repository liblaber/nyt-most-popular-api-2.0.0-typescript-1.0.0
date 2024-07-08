# EmailedArticle

**Properties**

| Name          | Type     | Required | Description                                                         |
| :------------ | :------- | :------- | :------------------------------------------------------------------ |
| url           | string   | ❌       | Article's URL.                                                      |
| adxKeywords   | string   | ❌       | Semicolon separated list of keywords.                               |
| subsection    | string   | ❌       | Article's subsection (e.g. Politics). Can be empty string.          |
| column        | string   | ❌       | Deprecated. Set to null.                                            |
| etaId         | number   | ❌       | Deprecated. Set to 0.                                               |
| section       | string   | ❌       | Article's section (e.g. Sports).                                    |
| id            | number   | ❌       | Asset ID number (e.g. 100000007772696).                             |
| assetId       | number   | ❌       | Asset ID number (e.g. 100000007772696).                             |
| nytdsection   | string   | ❌       | Article's section (e.g. sports).                                    |
| byline        | string   | ❌       | Article's byline (e.g. By Thomas L. Friedman).                      |
| type\_        | string   | ❌       | Asset type (e.g. Article, Interactive, ...).                        |
| title         | string   | ❌       | Article's headline (e.g. When the Cellos Play, the Cows Come Home). |
| abstract      | string   | ❌       | Brief summary of the article.                                       |
| publishedDate | string   | ❌       | When the article was published on the web (e.g. 2021-04-19).        |
| source        | string   | ❌       | Publisher (e.g. New York Times).                                    |
| updated       | string   | ❌       | When the article was last updated (e.g. 2021-05-12 06:32:03).       |
| desFacet      | string[] | ❌       | Array of description facets (e.g. Quarantine (Life and Culture)).   |
| orgFacet      | string[] | ❌       | Array of organization facets (e.g. Sullivan Street Bakery).         |
| perFacet      | string[] | ❌       | Array of person facets (e.g. Bittman, Mark).                        |
| geoFacet      | string[] | ❌       | Array of geographic facets (e.g. Canada).                           |
| media         | Media[]  | ❌       | Array of images.                                                    |
| uri           | string   | ❌       | An article's globally unique identifier.                            |
