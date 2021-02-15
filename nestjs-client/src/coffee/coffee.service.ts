import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { CoffeeDto } from "./coffee.dto";
import { Observable } from 'rxjs';

@Injectable()
export class CoffeeService {
    // private client: ClientProxy

    constructor( @Inject('COFFEE_SERVICE') private readonly client:ClientProxy) {
        // this.client = ClientProxyFactory.create({
        //     transport: Transport.TCP,
        //     options: {
        //         host: '127.0.0.1',
        //         port: 8899
        //     }
        // })
    }

    public getCoffees():Observable<number> {
        const pattern = { cmd: 'sum' };
        const payload = [1, 2, 3];

        // this.client.connect();
        // let res =  this.client.send('getmyCoffees', '')
        return this.client.send<number>(pattern, payload);
        // res.toPromise().then(r=>{
        //     console.log(r)
        // })
        // console.log('====================================')
        // console.log(res)
        // console.log('====================================')
        // res.subscribe(r => {
        //     console.log('$RRRRRRRRR');
            
        //     console.log(r); 
            
        // })
        
        // return res
        // return this.client.send('getmyCoffees', '')
    }

    public createCoffee(data: CoffeeDto) {
        return this.client.send('createCoffee', data)
    }

}