import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const port = process.env.PORT || 3000; 
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix)
  await app.listen(port, () => { 
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}
bootstrap();
