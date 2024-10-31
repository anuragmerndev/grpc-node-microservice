
import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { UserServiceHandlers } from "../generated/UserService";
import { CreateUserRequest, CreateUserRequest__Output } from "../generated/CreateUserRequest";

const userHandler: UserServiceHandlers = {
    createUser: async (call: ServerUnaryCall<CreateUserRequest, CreateUserRequest__Output>, callback: sendUnaryData<CreateUserRequest__Output>) => {
        const body = call.request;
        console.log(call.metadata);

        callback(null, { name: body.name! });
    }
}

export { userHandler }