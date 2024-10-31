
import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import {ProductServiceHandlers} from "../generated/ProductService";
import { CreateProductRequest, CreateProductRequest__Output } from "../generated/CreateProductRequest";

const productHandler: ProductServiceHandlers = {
    createProduct: async (call: ServerUnaryCall<CreateProductRequest, CreateProductRequest__Output>, callback: sendUnaryData<CreateProductRequest__Output>) => {
        const body = call.request;
        const headers = call.metadata;
        console.log("product", headers.get('X-API-KEY'), headers.get('authorization'));
        console.log({body}, "grpc");
        
        callback(null, { name: body.name! });
    }
}

export { productHandler }