import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as path from 'node:path';
import { ProtoGrpcType } from '../generated/product';

const PROTO_PATH = path.join(__dirname, '../proto/product.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const productRouteObject = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

export { productRouteObject };