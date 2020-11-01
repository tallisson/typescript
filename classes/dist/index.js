"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// modificadores de acesso: private, public, protected e readonly
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(UserAccount.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserAccount.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserAccount.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserAccount.prototype, "setAge", {
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    UserAccount.prototype.print = function () {
        console.log(this.name + " is " + this.age + " years old");
    };
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nick) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nick;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getNickname", {
        get: function () {
            return this.nickname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setNickname", {
        set: function (nick) {
            this.nickname = nick;
        },
        enumerable: false,
        configurable: true
    });
    CharAccount.prototype.print = function () {
        console.log(this.getName + " is " + this.getAge + " and has the nick " + this.nickname);
    };
    return CharAccount;
}(UserAccount));
var t = new UserAccount('Thiago', 30);
t.print();
t.setName = 'Thiago Allisson R da Silva';
t.setAge = 29;
t.print();
var c = new CharAccount('Thiago', 29, 'higuain');
c.print();
