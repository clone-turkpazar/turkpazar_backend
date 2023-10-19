import { DocumentBuilder } from '@nestjs/swagger';

const SwaggerConfig = new DocumentBuilder()
  .setTitle('REST API документация')
  .setDescription(
    'Это промежуточный backend, чтобы избежать CORS, ' +
      'так как нет доступа к https://api.turkpazar.ru/api. \n\n' +
      'По ссылке https://api.turkpazar.ru/api нет документации SwaggerUI. \n\n' +
      'Я как независимый разработчик написал документацию SwaggerUI и отключил CORS. \n\n' +
      'Мой вариант REST API:\n\n' +
      '- Документация \n' +
      '  - Было: \n' +
      '    - програмист не оставил SwaggerUI \n' +
      '    - тех. поддержка не предложила API для заполнения БД \n' +
      '  - Стало (доступна документация SwaggerUI):\n' +
      '    - `/api/turkpazar` \n' +
      '    - `/api/turkpazar/v1` \n' +
      '- Операции с номенклатурой: \n' +
      '  - Получение массива номенклатуры: \n' +
      '    - Было: \n' +
      '      - GET `/api/catalog/items` \n' +
      '    - Ошибки: \n' +
      '      - в URL нет версии API (например, `/api/v1/`) \n' +
      '    - Стало: \n' +
      '      - GET `/api/turkpazar/v1/catalog/items` \n' +
      '  - Получение номенклатуры по id: \n' +
      '    - Было: \n' +
      '      - GET `/api/catalog/item/{id}` \n' +
      '    - Ошибки: \n' +
      '      - нарушена технология REST API, так как указан `item/{id}`, а не `items/{id}` \n' +
      '      - в URL нет версии API (например, `/api/v1/`) \n' +
      '    - Стало: \n' +
      '      - GET `/api/turkpazar/v1/catalog/items/{id}` \n' +
      '\n\n',
  )
  .setVersion('1.0.0')
  .addTag('api_turkpazar_v1_catalog_items', 'Операции с номенклатурой')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'access token - токен доступа',
      in: 'header',
    },
    'access-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
  )
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'refresh token - токен обновления',
      in: 'header',
    },
    'refresh-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
  )
  .build();

export default SwaggerConfig;
