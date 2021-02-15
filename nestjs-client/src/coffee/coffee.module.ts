import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';
 

@Module({
  imports: [
    ClientsModule.register([
      {
        name:'COFFEE_SERVICE',
        transport: Transport.TCP,
        options: {
            host: '127.0.0.1',
            port: 8899
        }
      }
    ])
  ],
  controllers: [CoffeeController],
  providers: [CoffeeService],
  // exports: [AccountService, AccountModule],
})
export class CoffeeModule {}
