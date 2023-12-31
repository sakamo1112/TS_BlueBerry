var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
var __generator =
    (this && this.__generator) ||
    function (thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: [],
            },
            f,
            y,
            t,
            g;
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === 'function' &&
                (g[Symbol.iterator] = function () {
                    return this;
                }),
            g
        );
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError('Generator is already executing.');
            while ((g && ((g = 0), op[0] && (_ = 0)), _))
                try {
                    if (
                        ((f = 1),
                        y &&
                            (t =
                                op[0] & 2
                                    ? y['return']
                                    : op[0]
                                    ? y['throw'] ||
                                      ((t = y['return']) && t.call(y), 0)
                                    : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t;
                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (
                                !((t = _.trys),
                                (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0;
                                continue;
                            }
                            if (
                                op[0] === 3 &&
                                (!t || (op[1] > t[0] && op[1] < t[3]))
                            ) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
var _this = this;
// async関数の返り値は必ずPromiseになる.
function get3() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, 3];
        });
    });
}
var pa = get3();
pa.then(function (num) {
    //console.log(`num is ${num}`);
});
function fail() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            throw new Error('Og my god!!');
        });
    });
}
var pf = fail();
pf.catch(function (error) {
    //console.log(error);
});
var sleep1 = function (duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
};
var get3_1 = function () {
    return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('get3_1が呼び出されました.');
                    return [4 /*yield*/, sleep1(1000)];
                case 1:
                    _a.sent();
                    console.log('awaitの次に進みました.');
                    return [2 /*return*/, 3];
            }
        });
    });
};
var pg3_1 = get3_1();
console.log('get3_1を呼び出します.');
pg3_1.then(function (num) {
    console.log('num is '.concat(num));
});
console.log('get3_1を呼び出しました.');
var main = function () {
    return __awaiter(_this, void 0, void 0, function () {
        var num1, num2, num3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, get3_1()];
                case 1:
                    num1 = _a.sent();
                    return [4 /*yield*/, get3_1()];
                case 2:
                    num2 = _a.sent();
                    return [4 /*yield*/, get3_1()];
                case 3:
                    num3 = _a.sent();
                    return [2 /*return*/, num1 + num2 + num3];
            }
        });
    });
};
main().then(function (num) {
    console.log('num is '.concat(num));
});
var ReadWrite = function () {
    return __awaiter(_this, void 0, void 0, function () {
        var _a, readFile, writeFile, readdata, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 4, , 5]);
                    return [
                        4 /*yield*/,
                        Promise.resolve().then(function () {
                            return require('fs/promises');
                        }),
                    ];
                case 1:
                    (_a = _c.sent()),
                        (readFile = _a.readFile),
                        (writeFile = _a.writeFile);
                    return [4 /*yield*/, readFile('data/foo.txt', 'utf-8')];
                case 2:
                    readdata = _c.sent();
                    return [
                        4 /*yield*/,
                        writeFile('data/bar.txt', readdata + readdata),
                    ];
                case 3:
                    _c.sent();
                    return [3 /*break*/, 5];
                case 4:
                    _b = _c.sent();
                    console.error('ファイルの読み書きに失敗しました.');
                    throw new Error('ファイルの読み書きに失敗しました.');
                case 5:
                    return [2 /*return*/];
            }
        });
    });
};
console.log('ReadWriteを呼び出します.');
ReadWrite().then(function () {
    console.log('書き込みに成功しました.');
});
console.log('ReadWriteを呼び出しました.');
