"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var proto_signing_1 = require("@cosmjs/proto-signing");
var crypto_1 = require("@cosmjs/crypto");
// eslint-disable-next-line node/no-unpublished-import
var build_1 = require("../../build");
var stargate_1 = require("@cosmjs/stargate");
var rpcUrl = 'http://49.12.198.197:26657';
var faucet = {
    mnemonic: 'fuel obscure melt april direct second usual hair leave hobby beef bacon solid drum used law mercy worry fat super must ritual bring faculty',
    address: 'bitsong1nzxmsks45e55d5edj4mcd08u8dycaxq5eplakw'
};
var createWallet = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, proto_signing_1.DirectSecp256k1HdWallet.generate(12, { prefix: build_1.Constants.Bech32PrefixAccAddr, hdPaths: [crypto_1.stringToPath(build_1.Constants.getHdPath())] })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var defaultFee = {
    amount: [
        {
            denom: build_1.Constants.MicroDenom,
            amount: '2000'
        },
    ],
    gas: '180000'
};
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var faucetWallet, wallet, account, bitsong, signingBitsong, balance, amount, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(faucet.mnemonic, { prefix: build_1.Constants.Bech32PrefixAccAddr, hdPaths: [crypto_1.stringToPath(build_1.Constants.getHdPath())] })];
            case 1:
                faucetWallet = _a.sent();
                return [4 /*yield*/, createWallet()];
            case 2:
                wallet = _a.sent();
                return [4 /*yield*/, wallet.getAccounts()];
            case 3:
                account = (_a.sent())[0];
                console.log("Mnemonic: " + wallet.mnemonic);
                console.log("Address: " + account.address);
                return [4 /*yield*/, build_1.BitsongClient.connect(rpcUrl)];
            case 4:
                bitsong = _a.sent();
                return [4 /*yield*/, build_1.SigningBitsongClient.connectWithSigner(rpcUrl, faucetWallet)];
            case 5:
                signingBitsong = _a.sent();
                return [4 /*yield*/, bitsong.getBalance(account.address, build_1.Constants.MicroDenom)];
            case 6:
                balance = _a.sent();
                console.log("Your actual balance is: " + balance.amount + balance.denom);
                amount = {
                    denom: build_1.Constants.MicroDenom,
                    amount: '10000000'
                };
                console.log('sending tokens...');
                return [4 /*yield*/, signingBitsong.sendTokens(faucet.address, account.address, [amount], defaultFee, 'Have fun!')];
            case 7:
                result = _a.sent();
                stargate_1.assertIsBroadcastTxSuccess(result);
                console.log("Tx Hash: " + result.transactionHash);
                return [4 /*yield*/, bitsong.getBalance(account.address, build_1.Constants.MicroDenom)];
            case 8:
                balance = _a.sent();
                console.log("Your new balance is: " + balance.amount + balance.denom);
                return [2 /*return*/];
        }
    });
}); })();
