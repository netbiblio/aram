# aram

Интернет-сборник стихотворений в виде статического многостраничника (SSR + SPA).

[netbiblio.github.io/aram](https://netbiblio.github.io/aram)

## Предпросмотр билда

Доступен с помощью команды `npm start`:

- http://localhost:8080/aram/
- http://localhost:8080/aram/amp

## Набор возможностей

- [Карта сайта](https://netbiblio.github.io/aram/sitemap.xml).
- [AMP-страницы](https://netbiblio.github.io/aram/amp).
- [Turbo-страницы](https://netbiblio.github.io/aram/turbo.rss).
- [Автообновление зависимостей](tools/upgrade.ts).

## Технические особенности

- Автодеплой при пуше через github action.
- Отказ от scoped-стилей в компонентах из-за бага `inlineStyleThreshold` при сборке AMP-версии,
  а также из-за неглобальной сортировки медиазапросов. Разметка и стили стали компактнее.
