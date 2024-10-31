// Original file: src/proto/product.proto


export interface product {
  'name'?: (string);
}

export interface product__Output {
  'name': (string);
}
ductServiceClient, ProductServiceDefinition as _ProductServiceDefinition } from './ProductService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  CreateProductRequest: MessageTypeDefinition
  ProductService: SubtypeConstructor<typeof grpc.Client, _ProductServiceClient> & { service: _ProductServiceDefinition }
  product: MessageTypeDefinition
}

