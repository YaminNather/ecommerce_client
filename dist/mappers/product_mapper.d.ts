import BackendProduct from "../backend_models/backend_product";
import Product from "../models/product";
export default class ProductMapper {
    toProduct(data: BackendProduct): Product;
    toBackendProduct(product: Product): BackendProduct;
}
//# sourceMappingURL=product_mapper.d.ts.map