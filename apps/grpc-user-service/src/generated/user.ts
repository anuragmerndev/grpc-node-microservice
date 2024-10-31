// Original file: src/proto/user.proto


export interface User {
  'name'?: (string);
}

export interface User__Output {
  'name': (string);
}
s _UserServiceClient, UserServiceDefinition as _UserServiceDefinition } from './UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  CreateUserRequest: MessageTypeDefinition
  User: MessageTypeDefinition
  UserService: SubtypeConstructor<typeof grpc.Client, _UserServiceClient> & { service: _UserServiceDefinition }
}

