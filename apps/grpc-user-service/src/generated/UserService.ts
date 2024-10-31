// Original file: src/proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateUserRequest as _CreateUserRequest, CreateUserRequest__Output as _CreateUserRequest__Output } from './CreateUserRequest';
import type { User as _User, User__Output as _User__Output } from './User';

export interface UserServiceClient extends grpc.Client {
  createUser(argument: _CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _CreateUserRequest, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  createUser: grpc.handleUnaryCall<_CreateUserRequest__Output, _User>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  createUser: MethodDefinition<_CreateUserRequest, _User, _CreateUserRequest__Output, _User__Output>
}
