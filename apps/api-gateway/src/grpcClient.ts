import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as path from 'node:path';
import { ProtoGrpcType } from './generated/product';

const PROTO_PATH = path.join(__dirname, './proto/product.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const productRouteObject = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

const clientStub = new productRouteObject.ProductService(
    '0.0.0.0:50051',
    grpc.credentials.createInsecure()
);

async function fetchData() {
    return new Promise((resolve, reject) => {
        clientStub.createProduct({name: "test"}, (err, response) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(response);
            }
        })
    })
}

export { fetchData };