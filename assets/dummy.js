"use strict";



define('dummy/app', ['exports', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/components/flexi-container', ['exports', 'flexi-layouts/components/flexi-container'], function (exports, _flexiContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexiContainer.default;
    }
  });
});
define('dummy/components/flexi-grid', ['exports', 'flexi-layouts/components/flexi-grid'], function (exports, _flexiGrid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexiGrid.default;
    }
  });
});
define('dummy/components/flexi-layout', ['exports', 'flexi-layouts/components/flexi-layout'], function (exports, _flexiLayout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexiLayout.default;
    }
  });
});
define('dummy/components/render-template', ['exports', 'ember-dynamic-render-template/components/render-template'], function (exports, _renderTemplate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _renderTemplate.default;
    }
  });
});
define('dummy/controllers/application', ['exports', 'ember-controller'], function (exports, _emberController) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberController.default.extend({
    addTemplate: '{{add 1 2}}',
    divTemplate: '{{div 20 10}}',
    modTemplate: '{{mod 11 10}}',
    multTemplate: '{{mult 6 6}}',
    subTemplate: '{{sub 10 2}}',

    composableSub: '{{sub 10 1 2 3}}',
    composableComplex: '{{mult (div (add 15 5) 2) 10}}'
  });
});
define('dummy/ember-math-helpers/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('ember-math-helpers/helpers/abs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/abs.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/acos.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/acos.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/acosh.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/acosh.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/add.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/add.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/asin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/asin.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/asinh.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/asinh.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/atan.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/atan.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/atan2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/atan2.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/atanh.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/atanh.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/cbrt.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/cbrt.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/ceil.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/ceil.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/clz32.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/clz32.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/cos.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/cos.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/cosh.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/cosh.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/div.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/div.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/exp.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/exp.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/expm1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/expm1.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/floor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/floor.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/fround.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/fround.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/hypot.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/hypot.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/imul.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/imul.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/log-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/log-e.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/log10.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/log10.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/log1p.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/log1p.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/log2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/log2.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/max.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/max.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/min.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/min.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/mod.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/mod.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/mult.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/mult.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/pow.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/pow.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/random.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/random.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/round.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/round.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/sign.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/sign.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/sin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/sin.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/sqrt.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/sqrt.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/sub.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/sub.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/tan.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/tan.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/tanh.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/tanh.js should pass ESLint\n\n');
  });

  QUnit.test('ember-math-helpers/helpers/trunc.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-math-helpers/helpers/trunc.js should pass ESLint\n\n');
  });
});
define('dummy/helpers/-inject-layout', ['exports', 'flexi-layouts/helpers/-inject-layout'], function (exports, _injectLayout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _injectLayout.default;
    }
  });
  Object.defineProperty(exports, 'injectLayout', {
    enumerable: true,
    get: function () {
      return _injectLayout.injectLayout;
    }
  });
});
define('dummy/helpers/abs', ['exports', 'ember-math-helpers/helpers/abs'], function (exports, _abs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _abs.default;
    }
  });
  Object.defineProperty(exports, 'abs', {
    enumerable: true,
    get: function () {
      return _abs.abs;
    }
  });
});
define('dummy/helpers/acos', ['exports', 'ember-math-helpers/helpers/acos'], function (exports, _acos) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _acos.default;
    }
  });
  Object.defineProperty(exports, 'acos', {
    enumerable: true,
    get: function () {
      return _acos.acos;
    }
  });
});
define('dummy/helpers/acosh', ['exports', 'ember-math-helpers/helpers/acosh'], function (exports, _acosh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _acosh.default;
    }
  });
  Object.defineProperty(exports, 'acosh', {
    enumerable: true,
    get: function () {
      return _acosh.acosh;
    }
  });
});
define('dummy/helpers/add', ['exports', 'ember-math-helpers/helpers/add'], function (exports, _add) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _add.default;
    }
  });
  Object.defineProperty(exports, 'add', {
    enumerable: true,
    get: function () {
      return _add.add;
    }
  });
});
define('dummy/helpers/asin', ['exports', 'ember-math-helpers/helpers/asin'], function (exports, _asin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _asin.default;
    }
  });
  Object.defineProperty(exports, 'asin', {
    enumerable: true,
    get: function () {
      return _asin.asin;
    }
  });
});
define('dummy/helpers/asinh', ['exports', 'ember-math-helpers/helpers/asinh'], function (exports, _asinh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _asinh.default;
    }
  });
  Object.defineProperty(exports, 'asinh', {
    enumerable: true,
    get: function () {
      return _asinh.asinh;
    }
  });
});
define('dummy/helpers/atan', ['exports', 'ember-math-helpers/helpers/atan'], function (exports, _atan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  Object.defineProperty(exports, 'atan', {
    enumerable: true,
    get: function () {
      return _atan.atan;
    }
  });
});
define('dummy/helpers/atan2', ['exports', 'ember-math-helpers/helpers/atan2'], function (exports, _atan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  Object.defineProperty(exports, 'atan2', {
    enumerable: true,
    get: function () {
      return _atan.atan2;
    }
  });
});
define('dummy/helpers/atanh', ['exports', 'ember-math-helpers/helpers/atanh'], function (exports, _atanh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _atanh.default;
    }
  });
  Object.defineProperty(exports, 'atanh', {
    enumerable: true,
    get: function () {
      return _atanh.atanh;
    }
  });
});
define('dummy/helpers/cbrt', ['exports', 'ember-math-helpers/helpers/cbrt'], function (exports, _cbrt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cbrt.default;
    }
  });
  Object.defineProperty(exports, 'cbrt', {
    enumerable: true,
    get: function () {
      return _cbrt.cbrt;
    }
  });
});
define('dummy/helpers/ceil', ['exports', 'ember-math-helpers/helpers/ceil'], function (exports, _ceil) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ceil.default;
    }
  });
  Object.defineProperty(exports, 'ceil', {
    enumerable: true,
    get: function () {
      return _ceil.ceil;
    }
  });
});
define('dummy/helpers/clz32', ['exports', 'ember-math-helpers/helpers/clz32'], function (exports, _clz) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clz.default;
    }
  });
  Object.defineProperty(exports, 'clz32', {
    enumerable: true,
    get: function () {
      return _clz.clz32;
    }
  });
});
define('dummy/helpers/cos', ['exports', 'ember-math-helpers/helpers/cos'], function (exports, _cos) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cos.default;
    }
  });
  Object.defineProperty(exports, 'cos', {
    enumerable: true,
    get: function () {
      return _cos.cos;
    }
  });
});
define('dummy/helpers/cosh', ['exports', 'ember-math-helpers/helpers/cosh'], function (exports, _cosh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cosh.default;
    }
  });
  Object.defineProperty(exports, 'cosh', {
    enumerable: true,
    get: function () {
      return _cosh.cosh;
    }
  });
});
define('dummy/helpers/div', ['exports', 'ember-math-helpers/helpers/div'], function (exports, _div) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _div.default;
    }
  });
  Object.defineProperty(exports, 'div', {
    enumerable: true,
    get: function () {
      return _div.div;
    }
  });
});
define('dummy/helpers/exp', ['exports', 'ember-math-helpers/helpers/exp'], function (exports, _exp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _exp.default;
    }
  });
  Object.defineProperty(exports, 'exp', {
    enumerable: true,
    get: function () {
      return _exp.exp;
    }
  });
});
define('dummy/helpers/expm1', ['exports', 'ember-math-helpers/helpers/expm1'], function (exports, _expm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _expm.default;
    }
  });
  Object.defineProperty(exports, 'expm1', {
    enumerable: true,
    get: function () {
      return _expm.expm1;
    }
  });
});
define('dummy/helpers/floor', ['exports', 'ember-math-helpers/helpers/floor'], function (exports, _floor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _floor.default;
    }
  });
  Object.defineProperty(exports, 'floor', {
    enumerable: true,
    get: function () {
      return _floor.floor;
    }
  });
});
define('dummy/helpers/fround', ['exports', 'ember-math-helpers/helpers/fround'], function (exports, _fround) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fround.default;
    }
  });
  Object.defineProperty(exports, 'fround', {
    enumerable: true,
    get: function () {
      return _fround.fround;
    }
  });
});
define('dummy/helpers/hypot', ['exports', 'ember-math-helpers/helpers/hypot'], function (exports, _hypot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hypot.default;
    }
  });
  Object.defineProperty(exports, 'hypot', {
    enumerable: true,
    get: function () {
      return _hypot.hypot;
    }
  });
});
define('dummy/helpers/imul', ['exports', 'ember-math-helpers/helpers/imul'], function (exports, _imul) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _imul.default;
    }
  });
  Object.defineProperty(exports, 'imul', {
    enumerable: true,
    get: function () {
      return _imul.imul;
    }
  });
});
define('dummy/helpers/log-e', ['exports', 'ember-math-helpers/helpers/log-e'], function (exports, _logE) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _logE.default;
    }
  });
  Object.defineProperty(exports, 'logE', {
    enumerable: true,
    get: function () {
      return _logE.logE;
    }
  });
});
define('dummy/helpers/log10', ['exports', 'ember-math-helpers/helpers/log10'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(exports, 'log10', {
    enumerable: true,
    get: function () {
      return _log.log10;
    }
  });
});
define('dummy/helpers/log1p', ['exports', 'ember-math-helpers/helpers/log1p'], function (exports, _log1p) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log1p.default;
    }
  });
  Object.defineProperty(exports, 'log1p', {
    enumerable: true,
    get: function () {
      return _log1p.log1p;
    }
  });
});
define('dummy/helpers/log2', ['exports', 'ember-math-helpers/helpers/log2'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(exports, 'log2', {
    enumerable: true,
    get: function () {
      return _log.log2;
    }
  });
});
define('dummy/helpers/max', ['exports', 'ember-math-helpers/helpers/max'], function (exports, _max) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _max.default;
    }
  });
  Object.defineProperty(exports, 'max', {
    enumerable: true,
    get: function () {
      return _max.max;
    }
  });
});
define('dummy/helpers/min', ['exports', 'ember-math-helpers/helpers/min'], function (exports, _min) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _min.default;
    }
  });
  Object.defineProperty(exports, 'min', {
    enumerable: true,
    get: function () {
      return _min.min;
    }
  });
});
define('dummy/helpers/mod', ['exports', 'ember-math-helpers/helpers/mod'], function (exports, _mod) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mod.default;
    }
  });
  Object.defineProperty(exports, 'mod', {
    enumerable: true,
    get: function () {
      return _mod.mod;
    }
  });
});
define('dummy/helpers/mult', ['exports', 'ember-math-helpers/helpers/mult'], function (exports, _mult) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mult.default;
    }
  });
  Object.defineProperty(exports, 'mult', {
    enumerable: true,
    get: function () {
      return _mult.mult;
    }
  });
});
define('dummy/helpers/pow', ['exports', 'ember-math-helpers/helpers/pow'], function (exports, _pow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pow.default;
    }
  });
  Object.defineProperty(exports, 'pow', {
    enumerable: true,
    get: function () {
      return _pow.pow;
    }
  });
});
define('dummy/helpers/random', ['exports', 'ember-math-helpers/helpers/random'], function (exports, _random) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _random.default;
    }
  });
  Object.defineProperty(exports, 'random', {
    enumerable: true,
    get: function () {
      return _random.random;
    }
  });
});
define('dummy/helpers/round', ['exports', 'ember-math-helpers/helpers/round'], function (exports, _round) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _round.default;
    }
  });
  Object.defineProperty(exports, 'round', {
    enumerable: true,
    get: function () {
      return _round.round;
    }
  });
});
define('dummy/helpers/sign', ['exports', 'ember-math-helpers/helpers/sign'], function (exports, _sign) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sign.default;
    }
  });
  Object.defineProperty(exports, 'sign', {
    enumerable: true,
    get: function () {
      return _sign.sign;
    }
  });
});
define('dummy/helpers/sin', ['exports', 'ember-math-helpers/helpers/sin'], function (exports, _sin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sin.default;
    }
  });
  Object.defineProperty(exports, 'sin', {
    enumerable: true,
    get: function () {
      return _sin.sin;
    }
  });
});
define('dummy/helpers/sqrt', ['exports', 'ember-math-helpers/helpers/sqrt'], function (exports, _sqrt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sqrt.default;
    }
  });
  Object.defineProperty(exports, 'sqrt', {
    enumerable: true,
    get: function () {
      return _sqrt.sqrt;
    }
  });
});
define('dummy/helpers/sub', ['exports', 'ember-math-helpers/helpers/sub'], function (exports, _sub) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sub.default;
    }
  });
  Object.defineProperty(exports, 'sub', {
    enumerable: true,
    get: function () {
      return _sub.sub;
    }
  });
});
define('dummy/helpers/tan', ['exports', 'ember-math-helpers/helpers/tan'], function (exports, _tan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tan.default;
    }
  });
  Object.defineProperty(exports, 'tan', {
    enumerable: true,
    get: function () {
      return _tan.tan;
    }
  });
});
define('dummy/helpers/tanh', ['exports', 'ember-math-helpers/helpers/tanh'], function (exports, _tanh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tanh.default;
    }
  });
  Object.defineProperty(exports, 'tanh', {
    enumerable: true,
    get: function () {
      return _tanh.tanh;
    }
  });
});
define('dummy/helpers/trunc', ['exports', 'ember-math-helpers/helpers/trunc'], function (exports, _trunc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trunc.default;
    }
  });
  Object.defineProperty(exports, 'trunc', {
    enumerable: true,
    get: function () {
      return _trunc.trunc;
    }
  });
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('dummy/services/device/layout', ['exports', 'dummy/config/environment', 'flexi-layouts/services/device/layout'], function (exports, _environment, _layout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _layout.default.extend({
    breakpoints: _environment.default.flexi.breakpoints
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XrvT6m8F", "block": "{\"symbols\":[],\"statements\":[[6,\"centered\"],[7],[0,\"\\n  \"],[6,\"h1\"],[9,\"id\",\"title\"],[7],[6,\"span\"],[9,\"class\",\"pacifico\"],[7],[0,\"ember\"],[8],[0,\" math-helpers\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"centered\"],[7],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"Just a simple addon for doing basic arithmetic operations with Ember and HTMLBars\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"box\"],[7],[0,\"\\n  \"],[6,\"centered\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Basic Arithmetic\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"centered\"],[7],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"type\",\"value\"],[\"text\",[19,0,[\"addTemplate\"]]]]],false],[0,\"\\n    = \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[25,\"render-template\",null,[[\"templateString\"],[[19,0,[\"addTemplate\"]]]]],false],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"centered\"],[7],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"type\",\"value\"],[\"text\",[19,0,[\"divTemplate\"]]]]],false],[0,\"\\n    = \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[25,\"render-template\",null,[[\"templateString\"],[[19,0,[\"divTemplate\"]]]]],false],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"centered\"],[7],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"type\",\"value\"],[\"text\",[19,0,[\"modTemplate\"]]]]],false],[0,\"\\n    = \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[25,\"render-template\",null,[[\"templateString\"],[[19,0,[\"modTemplate\"]]]]],false],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"centered\"],[7],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"type\",\"value\"],[\"text\",[19,0,[\"multTemplate\"]]]]],false],[0,\"\\n    = \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[25,\"render-template\",null,[[\"templateString\"],[[19,0,[\"multTemplate\"]]]]],false],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"centered\"],[7],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"type\",\"value\"],[\"text\",[19,0,[\"subTemplate\"]]]]],false],[0,\"\\n    = \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[25,\"render-template\",null,[[\"templateString\"],[[19,0,[\"subTemplate\"]]]]],false],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"box\"],[7],[0,\"\\n  \"],[6,\"centered\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Composable Examples\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"centered\"],[7],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"type\",\"value\"],[\"text\",[19,0,[\"composableSub\"]]]]],false],[0,\"\\n    = \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[25,\"render-template\",null,[[\"templateString\"],[[19,0,[\"composableSub\"]]]]],false],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"centered\"],[7],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"type\",\"value\"],[\"text\",[19,0,[\"composableComplex\"]]]]],false],[0,\"\\n    = \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[25,\"render-template\",null,[[\"templateString\"],[[19,0,[\"composableComplex\"]]]]],false],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"box\"],[7],[0,\"\\n  \"],[6,\"centered\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Min, Max, Round\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"centered\"],[7],[0,\"\\n    Minimum of array: [2, 3, 5, 3, 26, 7, 123] = \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[25,\"min\",[2,3,5,3,26,7,123],null],false],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"centered\"],[7],[0,\"\\n    Maximum of array: [5, 2, 134, 125, 1234, 5234, 2] = \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[25,\"max\",[5,2,134,125,1234,5234,2],null],false],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"centered\"],[7],[0,\"\\n    21.23 rounded to the nearest whole number = \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[25,\"round\",[21.23],null],false],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"box\"],[7],[0,\"\\n  \"],[6,\"centered\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Random Numbers\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"centered\"],[7],[0,\"\\n    \"],[6,\"ul\"],[9,\"class\",\"category-list\"],[7],[0,\"\\n      \"],[6,\"centered\"],[7],[0,\"\\n        \"],[6,\"li\"],[7],[0,\"Integer (0 - 1): \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[18,\"random\"],false],[8],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"centered\"],[7],[0,\"\\n        \"],[6,\"li\"],[7],[0,\"Bounded Int (0 - 42): \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[25,\"random\",[42],null],false],[8],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"centered\"],[7],[0,\"\\n        \"],[6,\"li\"],[7],[0,\"Bounded Int (21 - 1797): \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[25,\"random\",[21,1797],null],false],[8],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"centered\"],[7],[0,\"\\n        \"],[6,\"li\"],[7],[0,\"Float, 2 decimals (0 - 1): \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[25,\"random\",null,[[\"decimals\"],[2]]],false],[8],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"centered\"],[7],[0,\"\\n        \"],[6,\"li\"],[7],[0,\"Float, 4 decimals (0 - 1): \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[25,\"random\",null,[[\"decimals\"],[4]]],false],[8],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"centered\"],[7],[0,\"\\n        \"],[6,\"li\"],[7],[0,\"Bounded Float, 1 decimal (20 - 93): \"],[6,\"span\"],[9,\"class\",\"result\"],[7],[1,[25,\"random\",[93,20],[[\"decimals\"],[1]]],false],[8],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});


define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map
