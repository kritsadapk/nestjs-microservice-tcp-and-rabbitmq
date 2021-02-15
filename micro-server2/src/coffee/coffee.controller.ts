import { Body, Controller, Logger } from '@nestjs/common';
import { Client, MessagePattern, Transport } from '@nestjs/microservices';
import { CoffeeDto } from './coffee.dto';
import { CoffeeService } from './coffee.service';

@Controller('coffee')

export class CoffeeController {
    private logger = new Logger('CoffeeController')

    constructor(private coffeeService: CoffeeService) {}

    // @Client({ transport: Transport.TCP })
    // @MessagePattern('getmyCoffees')
    @MessagePattern({ cmd: 'sum' })
    async accumulate(data: number[]): Promise<number> {
        // console.log('here',data);
        const rt = (data || []).reduce((a, b) => a + b);
        // console.log('====================================')
        // console.log(rt)
        // console.log('====================================')
        return rt
    }
    // getCoffess() {
    //     this.logger.log('getCoffees xxx' )
    //     console.log('here');
    //     return 'xxx'
    //     // return this.coffeeService.getCoffees()
    // }

    @MessagePattern('createCoffee')
    async createCoffee(
        @Body() coffeeDto: CoffeeDto
    ) {
        this.logger.log('createCoffee')
        return this.coffeeService.createCoffee(coffeeDto)
    }
}
