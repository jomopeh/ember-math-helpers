'use strict';

define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = _ember.default.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = _ember.default.RSVP.resolve;
});
define("dummy/tests/helpers/range", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (start, end) {
    return Array.from({ length: end - start + 1 }, function (x, idx) {
      return start + idx;
    });
  };
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dummy/tests/helpers/start-app', ['exports', 'dummy/app', 'dummy/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/range.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/range.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/abs-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/abs-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/acos-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/acos-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/acosh-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/acosh-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/add-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/add-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/asin-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/asin-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/asinh-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/asinh-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/atan-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/atan-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/atan2-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/atan2-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/atanh-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/atanh-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/cbrt-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/cbrt-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/ceil-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/ceil-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/clz32-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/clz32-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/cos-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/cos-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/cosh-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/cosh-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/div-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/div-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/exp-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/exp-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/expm1-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/expm1-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/floor-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/floor-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/fround-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/fround-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/hypot-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/hypot-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/imul-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/imul-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/log-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/log-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/log10-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/log10-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/log1p-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/log1p-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/log2-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/log2-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/max-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/max-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/min-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/min-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/mod-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/mod-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/mult-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/mult-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/pow-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/pow-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/random-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/random-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/round-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/round-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/sign-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/sign-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/sin-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/sin-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/sqrt-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/sqrt-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/sub-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/sub-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/tan-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/tan-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/tanh-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/tanh-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/trunc-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/trunc-test.js should pass ESLint\n\n');
  });
});
define('dummy/tests/unit/helpers/abs-test', ['dummy/helpers/abs', 'qunit'], function (_abs, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | abs');

  (0, _qunit.test)('absolute value works', function (assert) {
    var result = void 0;
    result = (0, _abs.abs)([-1]);
    assert.equal(result, 1);
    result = (0, _abs.abs)([1]);
    assert.equal(result, 1);
  });

  (0, _qunit.test)('absolute value of `null`, empty string, and empty array all equal 0', function (assert) {
    var result = void 0;
    result = (0, _abs.abs)([null]);
    assert.equal(result, 0);
    result = (0, _abs.abs)(['']);
    assert.equal(result, 0);
    result = (0, _abs.abs)([[]]);
    assert.equal(result, 0);
  });

  (0, _qunit.test)('absolute value of empty object literal equals `NaN`', function (assert) {
    var result = (0, _abs.abs)([{}]);
    assert.ok(isNaN(result));
  });
});
define('dummy/tests/unit/helpers/acos-test', ['dummy/helpers/acos', 'qunit'], function (_acos, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | acos');

  (0, _qunit.test)('acos works', function (assert) {
    var result = (0, _acos.acos)([1]);
    assert.equal(result, 0);
  });
});
define('dummy/tests/unit/helpers/acosh-test', ['dummy/helpers/acosh', 'qunit'], function (_acosh, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | acosh');

  (0, _qunit.test)('acosh works', function (assert) {
    var result = (0, _acosh.acosh)([1]);
    assert.equal(result, 0);
  });
});
define('dummy/tests/unit/helpers/add-test', ['dummy/helpers/add', 'qunit'], function (_add, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | add');

  (0, _qunit.test)('addition works', function (assert) {
    var result = (0, _add.add)([20, 10]);
    assert.equal(result, 30);
  });

  (0, _qunit.test)('addition of multiple arguments works', function (assert) {
    var result = (0, _add.add)([1, 2, 3, 4, 5]);
    assert.equal(result, 15);
  });
});
define('dummy/tests/unit/helpers/asin-test', ['dummy/helpers/asin', 'qunit'], function (_asin, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | asin');

  (0, _qunit.test)('asin works', function (assert) {
    var result = (0, _asin.asin)([0]);
    assert.equal(result, 0);
  });
});
define('dummy/tests/unit/helpers/asinh-test', ['dummy/helpers/asinh', 'qunit'], function (_asinh, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | asinh');

  (0, _qunit.test)('asinh works', function (assert) {
    var result = (0, _asinh.asinh)([0]);
    assert.equal(result, 0);
  });
});
define('dummy/tests/unit/helpers/atan-test', ['dummy/helpers/atan', 'qunit'], function (_atan, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | atan');

  (0, _qunit.test)('atan works', function (assert) {
    var result = (0, _atan.atan)([0]);
    assert.equal(result, 0);
  });
});
define('dummy/tests/unit/helpers/atan2-test', ['dummy/helpers/atan2', 'qunit'], function (_atan, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | atan2');

  (0, _qunit.test)('atan2 works', function (assert) {
    var result = (0, _atan.atan2)([0, 1]);
    assert.equal(result, 0);
  });
});
define('dummy/tests/unit/helpers/atanh-test', ['dummy/helpers/atanh', 'qunit'], function (_atanh, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | atanh');

  (0, _qunit.test)('atanh works', function (assert) {
    var result = (0, _atanh.atanh)([0]);
    assert.equal(result, 0);
  });
});
define('dummy/tests/unit/helpers/cbrt-test', ['dummy/helpers/cbrt', 'qunit'], function (_cbrt, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | cbrt');

  (0, _qunit.test)('cbrt works', function (assert) {
    var result = (0, _cbrt.cbrt)([27]);
    assert.equal(result, 3);
  });
});
define('dummy/tests/unit/helpers/ceil-test', ['dummy/helpers/ceil', 'qunit'], function (_ceil, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | ceil');

  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _ceil.ceil)([1]);
    assert.equal(result, 1);

    result = (0, _ceil.ceil)([1.01]);
    assert.equal(result, 2);

    result = (0, _ceil.ceil)([1.5]);
    assert.equal(result, 2);

    result = (0, _ceil.ceil)([1.99]);
    assert.equal(result, 2);

    result = (0, _ceil.ceil)([2]);
    assert.equal(result, 2);
  });
});
define('dummy/tests/unit/helpers/clz32-test', ['dummy/helpers/clz32', 'qunit'], function (_clz, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | clz32');

  (0, _qunit.test)('clz32 works', function (assert) {
    var result = (0, _clz.clz32)([1000]);
    assert.equal(result, 22);
  });
});
define('dummy/tests/unit/helpers/cos-test', ['dummy/helpers/cos', 'qunit'], function (_cos, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | cos');

  (0, _qunit.test)('cos works', function (assert) {
    var result = (0, _cos.cos)([0]);
    assert.equal(result, 1);
  });
});
define('dummy/tests/unit/helpers/cosh-test', ['dummy/helpers/cosh', 'qunit'], function (_cosh, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | cosh');

  (0, _qunit.test)('cosh works', function (assert) {
    var result = (0, _cosh.cosh)([0]);
    assert.equal(result, 1);
  });
});
define('dummy/tests/unit/helpers/div-test', ['dummy/helpers/div', 'qunit'], function (_div, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | div');

  (0, _qunit.test)('division works', function (assert) {
    var result = (0, _div.div)([20, 10]);
    assert.equal(result, 2);
  });

  (0, _qunit.test)('division of multiple arguments works works', function (assert) {
    var result = (0, _div.div)([96, 2, 3, 2, 2, 2, 2]);
    assert.equal(result, 1);
  });
});
define('dummy/tests/unit/helpers/exp-test', ['dummy/helpers/exp', 'qunit'], function (_exp, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | exp');

  (0, _qunit.test)('exp works', function (assert) {
    var result = (0, _exp.exp)([1]);
    assert.equal(result.toFixed(3), 2.718);
  });
});
define('dummy/tests/unit/helpers/expm1-test', ['dummy/helpers/expm1', 'qunit'], function (_expm, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | expm1');

  (0, _qunit.test)('expm1 works', function (assert) {
    var result = (0, _expm.expm1)([1]);
    assert.equal(result.toFixed(3), 1.718);
  });
});
define('dummy/tests/unit/helpers/floor-test', ['dummy/helpers/floor', 'qunit'], function (_floor, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | floor');

  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _floor.floor)([1]);
    assert.equal(result, 1);

    result = (0, _floor.floor)([1.01]);
    assert.equal(result, 1);

    result = (0, _floor.floor)([1.5]);
    assert.equal(result, 1);

    result = (0, _floor.floor)([1.99]);
    assert.equal(result, 1);

    result = (0, _floor.floor)([2]);
    assert.equal(result, 2);
  });
});
define('dummy/tests/unit/helpers/fround-test', ['dummy/helpers/fround', 'qunit'], function (_fround, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | fround');

  (0, _qunit.test)('fround works', function (assert) {
    var result = (0, _fround.fround)([1.337]);
    assert.equal(result, 1.3370000123977661);
  });
});
define('dummy/tests/unit/helpers/hypot-test', ['dummy/helpers/hypot', 'qunit'], function (_hypot, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | hypot');

  (0, _qunit.test)('hypot works', function (assert) {
    var result = (0, _hypot.hypot)([3, 4, 5]);
    assert.equal(result, 7.0710678118654755);
  });
});
define('dummy/tests/unit/helpers/imul-test', ['dummy/helpers/imul', 'qunit'], function (_imul, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | imul');

  (0, _qunit.test)('imul works', function (assert) {
    var result = (0, _imul.imul)([0xfffffffe, 5]);
    assert.equal(result, -10);
  });
});
define('dummy/tests/unit/helpers/log-e-test', ['dummy/helpers/log-e', 'qunit'], function (_logE, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | logE');

  (0, _qunit.test)('logE works', function (assert) {
    var result = (0, _logE.logE)([0.5]);
    assert.equal(result.toFixed(3), -0.693);
  });
});
define('dummy/tests/unit/helpers/log10-test', ['dummy/helpers/log10', 'qunit'], function (_log, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | log10');

  (0, _qunit.test)('log10 works', function (assert) {
    var result = (0, _log.log10)([2]);
    assert.equal(result.toFixed(3), 0.301);
  });
});
define('dummy/tests/unit/helpers/log1p-test', ['dummy/helpers/log1p', 'qunit'], function (_log1p, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | log1p');

  (0, _qunit.test)('log1p works', function (assert) {
    var result = (0, _log1p.log1p)([0.5]);
    assert.equal(result.toFixed(3), 0.405);
  });
});
define('dummy/tests/unit/helpers/log2-test', ['dummy/helpers/log2', 'qunit'], function (_log, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | log2');

  (0, _qunit.test)('log2 works', function (assert) {
    var result = (0, _log.log2)([2]);
    assert.equal(result, 1);
  });
});
define('dummy/tests/unit/helpers/max-test', ['dummy/helpers/max', 'qunit'], function (_max, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | max');

  // Replace this with your real tests.
  (0, _qunit.test)('max works', function (assert) {
    assert.equal((0, _max.max)([1, 2, 3, 5, 6, 42, 3, 6, 7]), 42, 'accepts multiple arguments');

    assert.equal((0, _max.max)([42]), 42, 'accepts one argument');

    assert.equal((0, _max.max)([]), Number.NEGATIVE_INFINITY, 'accepts zero arguments');

    assert.equal((0, _max.max)({}), Number.NEGATIVE_INFINITY, 'accepts an object');
  });
});
define('dummy/tests/unit/helpers/min-test', ['dummy/helpers/min', 'qunit'], function (_min, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | min');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    assert.equal((0, _min.min)([3, 2, 3, 5, 6, 42, 3, 6, 7]), 2, 'accepts multiple arguments');

    assert.equal((0, _min.min)([42]), 42, 'accepts one argument');

    assert.equal((0, _min.min)([]), Infinity, 'accepts zero arguments');

    assert.equal((0, _min.min)({}), Infinity, 'accepts an object');
  });
});
define('dummy/tests/unit/helpers/mod-test', ['dummy/helpers/mod', 'qunit'], function (_mod, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | mod');

  (0, _qunit.test)('modulus works', function (assert) {
    var result = (0, _mod.mod)([20, 10]);
    assert.equal(result, 0);
  });

  (0, _qunit.test)('modulus of multiple arguments works', function (assert) {
    var result = (0, _mod.mod)([10, 7, 2]);
    assert.equal(result, 1);
  });
});
define('dummy/tests/unit/helpers/mult-test', ['dummy/helpers/mult', 'qunit'], function (_mult, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | mult');

  (0, _qunit.test)('multiplication works', function (assert) {
    var result = (0, _mult.mult)([20, 10]);
    assert.equal(result, 200);
  });

  (0, _qunit.test)('multiplication of multiple arguments works', function (assert) {
    var result = (0, _mult.mult)([2, 2, 2, 2, 2, 3]);
    assert.equal(result, 96);
  });
});
define('dummy/tests/unit/helpers/pow-test', ['dummy/helpers/pow', 'qunit'], function (_pow, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | pow');

  (0, _qunit.test)('pow works', function (assert) {
    var result = (0, _pow.pow)([7, 2]);
    assert.equal(result, 49);
  });

  (0, _qunit.test)('negative base works', function (assert) {
    var result = (0, _pow.pow)([-7, 2]);
    assert.equal(result, 49);
  });

  (0, _qunit.test)('negative exponent works', function (assert) {
    var result = (0, _pow.pow)([2, -2]);
    assert.equal(result, 0.25);
  });
});
define('dummy/tests/unit/helpers/random-test', ['dummy/helpers/random', 'dummy/tests/helpers/range', 'qunit'], function (_random, _range, _qunit) {
  'use strict';

  var floor = Math.floor;

  var SAMPLE_SIZE = 100;
  var PRECISION = 6;

  // 💡 Because precise decimals aren't zero-padded, we can
  // tolerate some percentage of failures when dealing with decimal length
  var TOLERANCE = 0.25; // 75% pass-rate

  var randVal = void 0,
      satisfied = void 0,
      passCount = void 0,
      message = void 0;

  (0, _qunit.module)('Unit | Helper | random');

  function isPassing(passCount, sampleSize, toleranceRatio) {
    return passCount >= floor(sampleSize * (1 - toleranceRatio));
  }

  function numDecimals(floatingPointNum) {
    return floatingPointNum.toPrecision().split('.')[1].length;
  }

  (0, _qunit.test)('no positional arguments', function (assert) {
    message = 'defaults to returning the whole numbers of either 0 or 1';

    passCount = (0, _range.default)(1, SAMPLE_SIZE).reduce(function (acc) {
      randVal = (0, _random.random)();
      satisfied = randVal === 0 || randVal === 1;

      return satisfied ? acc + 1 : acc;
    }, 0);

    assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);

    message = 'returns a number between 0 and 1, with decimal precision specified by `decimals`';

    passCount = (0, _range.default)(1, SAMPLE_SIZE).reduce(function (acc) {
      randVal = (0, _random.random)({ decimals: PRECISION });

      satisfied = randVal > 0 && randVal < 1 && numDecimals(randVal) <= PRECISION;

      return satisfied ? acc + 1 : acc;
    }, 0);

    assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);
  });

  (0, _qunit.test)('one positional argument', function (assert) {
    message = 'returns a random whole number between 0 and 42, inclusive';

    passCount = (0, _range.default)(1, SAMPLE_SIZE).reduce(function (acc) {
      randVal = (0, _random.random)([42]);

      satisfied = randVal >= 0 && randVal <= 42;

      return satisfied ? acc + 1 : acc;
    }, 0);

    assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);

    message = 'returns a random number between 0 and a single positional arg, with decimal precision specified by `decimals`';
    passCount = (0, _range.default)(1, SAMPLE_SIZE).reduce(function (acc) {
      randVal = (0, _random.random)([42], { decimals: PRECISION });

      satisfied = randVal > 0 && randVal < 42 && numDecimals(randVal) <= PRECISION;

      return satisfied ? acc + 1 : acc;
    }, 0);

    assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);
  });

  (0, _qunit.test)('two positional arguments', function (assert) {
    message = 'returns a random whole number between two upper and lower bound postional args, inclusive';
    passCount = (0, _range.default)(1, SAMPLE_SIZE).reduce(function (acc) {
      randVal = (0, _random.random)([1797, 21]);

      satisfied = randVal >= 21 && randVal <= 1797;

      return satisfied ? acc + 1 : acc;
    }, 0);

    assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);

    message = 'returns a random number between two upper and lower bound postional args, with decimal precision specified by `decimals`';
    passCount = (0, _range.default)(1, SAMPLE_SIZE).reduce(function (acc) {
      randVal = (0, _random.random)([21, 1797], { decimals: PRECISION });

      satisfied = randVal >= 21 && randVal <= 1797 && numDecimals(randVal) <= PRECISION;

      return satisfied ? acc + 1 : acc;
    }, 0);

    assert.ok(isPassing(passCount, SAMPLE_SIZE, TOLERANCE), message);
  });

  (0, _qunit.test)('bounding `decimals` between 0 and 20', function (assert) {
    randVal = (0, _random.random)([42], { decimals: 100 });

    satisfied = randVal > 0 && randVal < 42 && numDecimals(randVal) <= 20;

    assert.ok(satisfied);
  });
});
define('dummy/tests/unit/helpers/round-test', ['dummy/helpers/round', 'qunit'], function (_round, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | round');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {

    assert.equal((0, _round.round)([20.49]), 20, 'It rounds values with a decimal place less than .5 down');

    assert.equal((0, _round.round)([20.5]), 21, 'It rounds values with a decimal place greater than or equal to .5 up');

    assert.equal((0, _round.round)([-20.5]), -20, 'It rounds negative numbers up appropriately');

    assert.equal((0, _round.round)([-20.51]), -21, 'It rounds negative numbers down appropriately');

    assert.equal((0, _round.round)([42]), 42, 'When given a whole number, the result stays the same');
  });
});
define('dummy/tests/unit/helpers/sign-test', ['dummy/helpers/sign', 'qunit'], function (_sign, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | sign');

  (0, _qunit.test)('it works', function (assert) {

    assert.equal((0, _sign.sign)([-5]), -1, 'Negative returns -1');

    assert.equal((0, _sign.sign)([5]), 1, 'Positive returns 1');

    assert.equal(String((0, _sign.sign)(['foo'])), 'NaN', 'Invalid returns NaN');
  });
});
define('dummy/tests/unit/helpers/sin-test', ['dummy/helpers/sin', 'qunit'], function (_sin, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | sin');

  (0, _qunit.test)('sin works', function (assert) {
    var result = (0, _sin.sin)([0]);
    assert.equal(result, 0);
  });
});
define('dummy/tests/unit/helpers/sqrt-test', ['dummy/helpers/sqrt', 'qunit'], function (_sqrt, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | sqrt');

  (0, _qunit.test)('square root works', function (assert) {
    var result = (0, _sqrt.sqrt)([25]);
    assert.equal(result, 5);
  });

  (0, _qunit.test)('negative square root is NaN', function (assert) {
    var result = (0, _sqrt.sqrt)([-10]);
    assert.ok(isNaN(result));
  });
});
define('dummy/tests/unit/helpers/sub-test', ['dummy/helpers/sub', 'qunit'], function (_sub, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | sub');

  (0, _qunit.test)('subtraction works', function (assert) {
    var result = (0, _sub.sub)([20, 10]);
    assert.equal(result, 10);
  });

  (0, _qunit.test)('subtraction of multiple arguments works', function (assert) {
    var result = (0, _sub.sub)([5, 4, 2, -9]);
    assert.equal(result, 8);
  });
});
define('dummy/tests/unit/helpers/tan-test', ['dummy/helpers/tan', 'qunit'], function (_tan, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | tan');

  (0, _qunit.test)('tan works', function (assert) {
    var result = (0, _tan.tan)([1]);
    assert.equal(result.toFixed(3), 1.557);
  });
});
define('dummy/tests/unit/helpers/tanh-test', ['dummy/helpers/tanh', 'qunit'], function (_tanh, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | tanh');

  (0, _qunit.test)('tanh works', function (assert) {
    var result = (0, _tanh.tanh)([1]);
    assert.equal(result.toFixed(3), 0.762);
  });
});
define('dummy/tests/unit/helpers/trunc-test', ['dummy/helpers/trunc', 'qunit'], function (_trunc, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | trunc');

  (0, _qunit.test)('trunc works', function (assert) {
    var result = void 0;
    result = (0, _trunc.trunc)([13.37]);
    assert.equal(result, 13);
    result = (0, _trunc.trunc)([0.123]);
    assert.equal(result, 0);
    result = (0, _trunc.trunc)([-1.123]);
    assert.equal(result, -1);
  });
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
