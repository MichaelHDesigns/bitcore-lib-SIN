'use strict';

var hthcore = module.exports;

// module information
hthcore.version = 'v' + require('./package.json').version;
hthcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of hthcore-lib-SIN found. ' +
      'Please make sure to require hthcore-lib-SIN and check that submodules do' +
      ' not also include their own hthcore-lib-SIN dependency.';
    // TODO: put this back if we start versioning again
    //throw new Error(message);
  }
};
hthcore.versionGuard(global.hthcore);
global.hthcore = hthcore.version;

// crypto
hthcore.crypto = {};
hthcore.crypto.BN = require('./lib/crypto/bn');
hthcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
hthcore.crypto.Hash = require('./lib/crypto/hash');
hthcore.crypto.Random = require('./lib/crypto/random');
hthcore.crypto.Point = require('./lib/crypto/point');
hthcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
hthcore.encoding = {};
hthcore.encoding.Base58 = require('./lib/encoding/base58');
hthcore.encoding.Base58Check = require('./lib/encoding/base58check');
hthcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
hthcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
hthcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
hthcore.util = {};
hthcore.util.buffer = require('./lib/util/buffer');
hthcore.util.js = require('./lib/util/js');
hthcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
hthcore.errors = require('./lib/errors');

// main bitcoin library
hthcore.Address = require('./lib/address');
hthcore.Block = require('./lib/block');
hthcore.MerkleBlock = require('./lib/block/merkleblock');
hthcore.BlockHeader = require('./lib/block/blockheader');
hthcore.HDPrivateKey = require('./lib/hdprivatekey.js');
hthcore.HDPublicKey = require('./lib/hdpublickey.js');
hthcore.Networks = require('./lib/networks');
hthcore.Opcode = require('./lib/opcode');
hthcore.PrivateKey = require('./lib/privatekey');
hthcore.PublicKey = require('./lib/publickey');
hthcore.Script = require('./lib/script');
hthcore.Transaction = require('./lib/transaction');
hthcore.URI = require('./lib/uri');
hthcore.Unit = require('./lib/unit');

// dependencies, subject to change
hthcore.deps = {};
hthcore.deps.bnjs = require('bn.js');
hthcore.deps.bs58 = require('bs58');
hthcore.deps.Buffer = Buffer;
hthcore.deps.elliptic = require('elliptic');
hthcore.deps.newalgo = require('node-x25x');
hthcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
hthcore._HDKeyCache = require('./lib/hdkeycache');
hthcore.Transaction.sighash = require('./lib/transaction/sighash');
