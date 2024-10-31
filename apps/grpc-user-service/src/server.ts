import * as grpc from '@grpc/grpc-js';
import { userRouteObject } from './routes/user';
import { userHandler } from './handlers/user';
import { productRouteObject } from './routes/product';
import { productHandler } from './handlers/product';


const server = new grpc.Server();
server.addService(userRouteObject.UserService.service, userHandler);
server.addService(productRouteObject.ProductService.service, productHandler);

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('Server running at 0.0.0.0:50051');
})