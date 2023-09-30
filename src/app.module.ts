import { Module } from '@nestjs/common';
import { AppController } from './infra/controllers/app.controller';
import { AppService } from './infra/services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
