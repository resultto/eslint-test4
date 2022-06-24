module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser', // 解析器（parser）
    sourceType: 'module' // 指定源代码存在的位置，script | module，默认为script
  },
  // 环境定义了预定义的全局变量。
  env: {
    browser: true, // 启用浏览器全局变量
    node: true, // Node.js全局变量和Node.js范围
    es6: true // 启用ES6的功能
  },
  // 扩展风格
  // extends: ['plugin:vue/recommended', 'eslint:recommended'],
  extends: [
    'plugin:vue/recommended', // 对vue文件进行校验
    'eslint:recommended', // eslint推荐的
    '@vue/prettier'
  ],
  // 全局变量忽略
  globals: {
    _FORM: true,
    _Util: true,
    asyncRoutes: true
  },

  /**
   * "off"或0 - 关闭规则
   * "warn" 或1 - 开启规则,出现问题会有警告
   * "error"或2 - 开启规则，出现问题会报错
   */
  rules: {
    // 'vue/max-attributes-per-line': [2, { // 每行最大属性
    //   'singleline': 10, // 标签为单行时，每行最大属性数值为 10，默认值为 1
    //   'multiline': {
    //     'max': 1, // 标签为多行时，每行最大属性数字为 1，默认值为 1
    //     'allowFirstLine': false // 不允许属性与该标记名称位于同一行，默认值为 false
    //   }
    // }],
    'prettier/prettier': 'error',
    'vue/singleline-html-element-content-newline': 'off', // 禁用单行标签内容需换行的校验
    'vue/multiline-html-element-content-newline': 'off', // 禁用多行标签内容需换行的校验
    'vue/name-property-casing': ['error', 'PascalCase'], // 组件 name 属性值必须使用帕斯卡命名法（单词首字母大写）
    'vue/no-v-html': 'off', // 不使用v-html
    'accessor-pairs': 2, // 强制 getter 和 setter在对象中成对出现
    'arrow-spacing': [
      2,
      {
        // 箭头函数 => 前后必须有空格
        before: true,
        after: true
      }
    ],
    'block-spacing': [2, 'always'], // 单行代码块花括号打开块之后和关闭块之前，至少一个空格
    'brace-style': [
      2,
      '1tbs',
      {
        // 强制使⽤⼀致的缩进第⼆个参数为 "tab" 时，会使⽤tab ：  if while function 后⾯的{必须与if在同⼀⾏
        allowSingleLine: true // 允许同一行上打开和关闭括号
      }
    ],
    camelcase: [
      0,
      {
        // 双驼峰命名格式
        properties: 'always'
      }
    ],
    'comma-dangle': [2, 'never'], // 数组和对象键值对最后一个逗号，never：不能带末尾的逗号 always: 必须带末尾的逗号 always-multiline：多⾏模式必须带逗号，单⾏模式不能带逗号
    'comma-spacing': [
      2,
      {
        // 控制逗号前后的空格
        before: false, // 在逗号前不允许有空格
        after: true // 在逗号后需要一个或多个空格
      }
    ],
    'comma-style': [2, 'last'], // 控制逗号在行尾出现还是行首出现(默认行尾)
    'constructor-super': 2, // 子类构造函数必须使用 super()调用父类构造函数。非子类的构造函数不得调用
    curly: [2, 'multi-line'], // 当一个块只包含一条语句时，if，else if，else，for，while，或 do 允许省略花括号
    'dot-location': [2, 'property'], //  表达式中点"."要求与属性位于同一行。 （强制object.key 中 . 的位置，参数: property，'.'号应与属性在同⼀⾏,  object, '.' 号应与对象名在同⼀⾏）
    'eol-last': 2, // 强制文件以换行符结束（文件以一空行结束）
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ], // 使⽤ === 替代 ==, 但不将此规则应用于 null
    'generator-star-spacing': [
      2,
      {
        // 使用生成器时关键字*前后均须有空格
        before: true,
        after: true
      }
    ],
    'handle-callback-err': [2, '^(err|error)$'], // 要求回调函数中有容错处理（回调模式需处理 err 或 error，报告所有未处理的错误）
    indent: [
      2,
      2,
      {
        // 使用两个空格进行缩进，
        SwitchCase: 1 // case 针对 switch 语句使用 2 个空格缩进
      }
    ],
    // 'jsx-quotes': [2, 'prefer-single'], // 在 JSX 属性中强制使用单引号
    'key-spacing': [
      2,
      {
        // 对象字面量属性中强制在冒号后放置空格，冒号前不允许空格
        beforeColon: false, // 不允许在对象文字中的键和冒号之间使用空格
        afterColon: true // 需要在冒号和对象文字中的值之间至少有一个空格
      }
    ],
    'keyword-spacing': [
      2,
      {
        // 强制在关键字前后至少有一个空格
        before: true,
        after: true
      }
    ],
    'new-cap': [
      2,
      {
        // 要求构造函数首字母大写，以下内置标识符可免除此规则：Array、Boolean、 Date、Error、Function、Number、Object、RegExp、String、Symbol
        newIsCap: true, // new 方式调用的函数需以大写开头
        capIsNew: false // 允许直接调用大写开头的函数，无需使用 new
      }
    ],
    'new-parens': 2, // 使用 new 关键字调用无参构造函数，函数名后强制使用括号
    'no-array-constructor': 2, // 禁止使用Array数组构造函数
    'no-caller': 2, // 禁⽤ arguments.caller 或 arguments.callee
    'no-console': 'off', // 关闭 console 校验规则
    'no-class-assign': 2, // 禁止修改类声明的变量
    'no-cond-assign': 2, // 禁止条件表达式中出现赋值操作符
    'no-const-assign': 2, // 禁止修改const关键字声明的变量
    'no-control-regex': 0, // 关闭在正则表达式中的控制字符校验规则
    'no-delete-var': 2, // 不允许对变量使用 delete 操作符
    'no-dupe-args': 2, // 禁⽌ function 定义中出现重名参数
    'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称
    'no-dupe-keys': 2, // 禁⽌对象字⾯量中出现重复的 key
    'no-duplicate-case': 2, // 不允许在 switch 语句的 case 子句中使用重复的 case 分支
    'no-empty-character-class': 2, // 禁⽌在正则表达式中使⽤空字符集 (/^abc[]/)
    'no-empty-pattern': 2, // 对象和数组使用解构时，不允许空模式
    'no-eval': 2, // 禁⽤ eval()函数
    'no-ex-assign': 2, // 禁⽌对 catch 语句中的异常参数赋值
    'no-extend-native': 2, // 不允许直接修改内置原生对象
    'no-extra-bind': 2, // 禁⽌不必要的 .bind() 调⽤
    'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换
    'no-extra-parens': [2, 'functions'], // 在使用函数表达式时，禁止使用不必要的括号
    'no-fallthrough': 2, // 禁止 switch 穿透，需使用 break 中断
    'no-floating-decimal': 2, //  // 禁止省略浮点数中的 0
    'no-func-assign': 2, // 禁止对function声明重新赋值
    'no-implied-eval': 2, // // 禁止使用隐式 eval()，即：始终使用函数作为 setTimeout()、setInterval()和execScript()的第一个参数
    'no-inner-declarations': [2, 'functions'], // 禁⽌在嵌套的块中出现 function 或 var 声明
    'no-invalid-regexp': 2, // 禁⽌ RegExp 构造函数中使用⽆效的正则表达式字符串
    'no-irregular-whitespace': 2, // 禁止使用无效空格（不是正常的制表符和空格），但允许在字符串中使用任何空格字符
    'no-iterator': 2, // 禁⽤ __iterator__ 属性
    'no-label-var': 2, // 不允许标签与变量同名
    'no-labels': [
      2,
      {
        // 禁用标签语句
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': 2, // 禁用不必要的嵌套块
    'no-mixed-spaces-and-tabs': 2, // 不允许空格和tab混合缩进
    'no-multi-spaces': 2, // 禁止在逻辑表达式，条件表达式，声明，数组元素，对象属性，序列和函数参数周围使用多个空格
    'no-multi-str': 2, // 禁⽌使⽤多⾏字符串，可以在新⾏之前使⽤斜线（\）创建多⾏字符串
    'no-multiple-empty-lines': [
      2,
      {
        // 不允许多个空行
        max: 1
      }
    ],
    'no-native-reassign': 2, // 不允许修改只读全局变量
    'no-negated-in-lhs': 2, // 禁⽌在 in 表达式中出现否定的左操作数
    'no-new-object': 2, // 禁止使用Object的构造函数
    'no-new-require': 2, // 禁止调用require时使用new操作符
    'no-new-symbol': 2, // 禁止Symbol的构造函数
    'no-new-wrappers': 2, // 禁⽌对 String，Number 和 Boolean 使⽤ new 操作符
    'no-obj-calls': 2, // 禁⽌把全局对象 (Math 和 JSON) 作为函数调⽤错误(即不允许调用 Math，JSON 和 Reflect 对象作为函数)：var math = Math();
    'no-octal': 2, // 禁用八进制
    'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
    'no-path-concat': 2, // 禁⽌对 __dirname 和 __filename进⾏字符串连接
    'no-proto': 2, // 禁⽤ __proto__属性
    'no-redeclare': 2, // 不允许同一作用域内声明相同变量名称
    'no-regex-spaces': 2, // 正则表达式文字中不允许有多个空格
    'no-return-assign': [2, 'except-parens'], // return 语句中的赋值必需有括号包裹
    'no-self-assign': 2, // 禁止自我赋值
    'no-self-compare': 2, // 禁止自身比较
    'no-sequences': 2, // 禁用逗号操作符,除非在 for 语句的初始化或更新部分，表达式序列显式包含在圆括号中
    'no-shadow-restricted-names': 2, // 禁止对全局对象赋值
    'no-spaced-func': 2, // 禁止function标识符和括号之间出现空格
    'no-sparse-arrays': 2, // 禁用稀疏数组
    'no-this-before-super': 2, // 禁止在构造函数中，在调用super()之前使用this或super
    'no-throw-literal': 2, // 用 throw 抛错时，抛出 Error 对象而不是字符串
    'no-trailing-spaces': 2, // 禁用行尾空格
    'no-undef': 2, // 禁止引用未声明的变量
    'no-undef-init': 2, // 禁⽌将变量初始化为 undefined
    'no-unexpected-multiline': 2, // 禁止混淆多行表达式
    'no-unmodified-loop-condition': 2, // 检查循环条件内的引用是否在循环中被修改
    'no-unneeded-ternary': [
      2,
      {
        // 禁止可以在有更简单的可替代的表达式时使用三元操作符
        defaultAssignment: false
      }
    ],
    'no-unreachable': 2, // 禁⽌在return、throw、continue 和 break语句之后出现代码
    'no-unsafe-finally': 2, // 不允许 return，throw，break，和 continue 语句使用 finally 块，即：finally 代码块中不要再改变程序执行流程，但它允许间接使用
    'no-unused-vars': [
      2,
      {
        // 禁⽌出现未使⽤过的变量、函数和函数的参数
        vars: 'all', // 检查全局范围内的变量
        args: 'none' // 不检查参数
      }
    ],
    'vue/html-self-closing': 0, // 忽略html标签自闭合
    'no-useless-call': 2, // 禁止不必要的.call() 和 .apply()
    'no-useless-computed-key': 2, // 禁止不必要的计算属性键作对象属性
    'no-useless-constructor': 2, // 禁止不必要的构造函数
    'no-useless-escape': 0, // 关闭不必要的转义检测规则
    'no-whitespace-before-property': 2, // 禁止属性前有空白
    'no-with': 2, // 禁用with语句
    'one-var': [
      2,
      {
        //  // 一个变量关键字（var，let 或 const）只声明一个变量 (强制函数中的变量要么一起声明要么分开)
        initialized: 'never' // 每个作用域要求多个变量声明用于初始化变量
      }
    ],
    'operator-linebreak': [
      2,
      'after',
      {
        // 使用一致的换行符样式，将换行符放置在运算符之后
        overrides: {
          '?': 'before', // 三元运算换行符置于 ? 前image.png
          ':': 'before' // 三元运算换行符置于 : 前
        }
      }
    ],
    'padded-blocks': [2, 'never'], // 在 block 语句和类的开头和结尾处不允许出现空行
    quotes: [
      2,
      'single',
      {
        // 字符串尽可能使用单引号
        avoidEscape: true, // 允许字符串使用单引号或双引号，只要字符串包含必须被转义的引号即可
        allowTemplateLiterals: true // 允许字符串使用反引号
      }
    ],
    semi: [2, 'never'], // // 禁止使用分号结尾
    'semi-spacing': [
      2,
      {
        // 分号后强制使用空格，并在分号前禁止使用空格
        before: false,
        after: true
      }
    ],
    'space-before-blocks': [2, 'always'], // 代码块前至少有一个空格
    'space-before-function-paren': 0, // 函数名称或 function 关键字与开头括号之间不允许有空格
    'space-in-parens': [2, 'never'], // 禁止在括号内使用空格
    'space-infix-ops': 2, // 中缀运算符周围需有空格
    'space-unary-ops': [
      2,
      {
        // 一元运算词后须有空格，一元运算符后不允许有空格
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      2,
      'always',
      {
        // 注释//和/*后必须跟一个空格
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ','
        ]
      }
    ],
    'template-curly-spacing': [2, 'never'], // 模板字符串${}中不允许有空格
    'use-isnan': 2, // 要求使用isNaN()检查NaN
    'valid-typeof': 2, // typeof 比较需使用有效字符串（"undefined"，"object"，"boolean"，"number"，"string"，"function"，"symbol"，和"bigint"）
    'wrap-iife': [2, 'any'], // 自调用匿名函数 (IIFEs) 使用括号包裹
    'yield-star-spacing': [2, 'both'], // yield 表达式前后都要有空格
    yoda: [2, 'never'], // 要求或禁止"Yoda"条件
    'prefer-const': 2, // 使用 const 声明初始赋值后永远不重新赋值的变量
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 生产环境中禁止使用 debugger 调试器
    'object-curly-spacing': [
      2,
      'always',
      {
        // 花括号内需要空格（{}除外）
        objectsInObjects: true // 以对象元素开始或结束的花括号间不允许有空格
      }
    ],
    'array-bracket-spacing': [2, 'never'] // 数组方括号内不允许使用空格
  }
}
