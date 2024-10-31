// Original file: src/proto/product.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateProductRequest as _CreateProductRequest, CreateProductRequest__Output as _CreateProductRequest__Output } from './CreateProductRequest';
import type { product as _product, product__Output as _product__Output } from './product';

export interface ProductServiceClient extends grpc.Client {
  createProduct(argument: _CreateProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_product__Output>): grpc.ClientUnaryCall;
  createProduct(argument: _CreateProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_product__Output>): grpc.ClientUnaryCall;
  createProduct(argument: _CreateProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_product__Output>): grpc.ClientUnaryCall;
  createProduct(argument: _CreateProductRequest, callback: grpc.requestCallback<_product__Output>): grpc.ClientUnaryCall;
  
}

export interface ProductServiceHandlers extends grpc.UntypedServiceImplementation {
  createProduct: grpc.handleUnaryCall<_CreateProductRequest__Output, _product>;
  
}

export interface ProductServiceDefinition extends grpc.ServiceDefinition {
  createProduct: MethodDefinition<_CreateProductRequest, _product, _CreateProductRequest__Output, _product__Output>
}
