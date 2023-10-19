import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import SwaggerConfig from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, SwaggerConfig);
  SwaggerModule.setup('/api/turkpazar', app, document);
  SwaggerModule.setup('/api/turkpazar/v1', app, document);

  const PORT = 5555;
  await app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}/api/turkpazar - SwaggerUI`);
  });
}
bootstrap();
