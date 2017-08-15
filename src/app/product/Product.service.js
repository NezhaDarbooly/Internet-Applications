"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Product_1 = require("./Product");
var ProductService = (function () {
    function ProductService() {
        this.products = [];
        this.found = false;
        this.products.push(new Product_1.Product('Baby Formula', 2000, 3000), new Product_1.Product('chips', 2000, 200), new Product_1.Product('drinks', 2000, 200), new Product_1.Product('Pepsi', 4000, 370), new Product_1.Product('cheese', 300, 500), new Product_1.Product('ice cream', 1200, 100), new Product_1.Product('cake', 200, 1000), new Product_1.Product('sugar', 3, 650), new Product_1.Product('rice', 100, 700), new Product_1.Product('pen', 500, 70), new Product_1.Product('detergent', 500, 70), new Product_1.Product('marker', 300, 200), new Product_1.Product('notebook', 1300, 240), new Product_1.Product('Flash Light', 100, 300), new Product_1.Product('Lighter', 150, 100), new Product_1.Product('Toys', 50, 1500));
    }
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.getProductItem = function (name) {
        var _this = this;
        this.products.forEach(function (element) {
            if (element.name === name) {
                _this.found = true;
                _this.wantedProduct = element;
                element.quantity = element.quantity - 1;
                if (element.quantity === 0) {
                    _this.products.splice(_this.products.indexOf(element), 1);
                }
            }
        });
        if (this.found === true) {
            return this.wantedProduct;
        }
    };
    return ProductService;
}());
__decorate([
    core_1.Injectable(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductService.prototype, "getProducts", null);
__decorate([
    core_1.Injectable(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductService.prototype, "getProductItem", null);
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=Product.service.js.map