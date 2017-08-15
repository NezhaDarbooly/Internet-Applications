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
var Bill_1 = require("./Bill/Bill");
var Product_service_1 = require("./product/Product.service");
var AppComponent = (function () {
    function AppComponent(dataSerive) {
        this.dataSerive = dataSerive;
        this.products = [];
        this.cart = [];
        this.billProducts = [];
        this.nofItems = [];
        this.total = 0;
        this.count = 0;
        this.checkedOut = false;
        this.products = dataSerive.getProducts();
    }
    AppComponent.prototype.getItem = function (name) {
        this.cart.push(this.dataSerive.getProductItem(name));
    };
    AppComponent.prototype.clearCart = function () {
        this.cart = [];
        this.billProducts = [];
        this.bill.products = [];
        this.bill.numofItems = [];
        this.bill.total = 0;
    };
    AppComponent.prototype.removeItem = function (name) {
        var _this = this;
        this.cart.forEach(function (element) {
            if (element.name === name) {
                _this.cart.splice(_this.cart.indexOf(element), 1);
            }
        });
    };
    AppComponent.prototype.getNofItems = function (name) {
        var _this = this;
        this.count = 0;
        this.cart.forEach(function (element) {
            if (element.name === name) {
                _this.count = _this.count + 1;
            }
        });
        return this.count;
    };
    AppComponent.prototype.makeBill = function () {
        var _this = this;
        if (this.cart.length !== 0) {
            this.checkedOut = true;
            this.getBillProducts().forEach(function (element) {
                _this.nofItems.push(_this.getNofItems(element.name));
            });
            this.bill = new Bill_1.Bill(new Date(), this.billProducts, this.nofItems, this.calculateTotal());
            //console.log(this.bill.date+"**"+this.bill.products.length+"**"+this.bill.numofItems+"**"+this.bill.total)
            this.cart = [];
        }
    };
    AppComponent.prototype.getBillProducts = function () {
        var _this = this;
        this.cart.forEach(function (element) {
            if (_this.billProducts.indexOf(element) === -1) {
                _this.billProducts.push(element);
            }
        });
        return this.billProducts;
    };
    AppComponent.prototype.calculateTotal = function () {
        var _this = this;
        this.cart.forEach(function (element) {
            _this.total = _this.total + element.price;
        });
        return this.total;
    };
    AppComponent.prototype.getBillDate = function () {
        return this.bill.date.getDay() + "/" + this.bill.date.getMonth() + "/" + this.bill.date.getFullYear() + " " + this.bill.date.getHours() + ":" + this.bill.date.getMinutes() + ":" + this.bill.date.getSeconds();
    };
    AppComponent.prototype.anotherBill = function () {
        this.bill = new Bill_1.Bill(new Date(), [], [], 0);
        this.billProducts = [];
        this.count = 0;
        this.nofItems = [];
        this.total = 0;
        this.checkedOut = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './Bootstrap/navbar.html',
        providers: [Product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [Product_service_1.ProductService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map