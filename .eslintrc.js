/*
 * @Description: eslint
 * @Author: xiaoer
 * @Date: 2020-11-11 16:35:42
 * @LastEditTime: 2020-11-12 10:55:20
 */
module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        //在定义对象的时候，getter/setter需要同时出现
        "accessor-pairs": 2,
        // 箭头函数中，在需要的时候，在参数外使用小括号（只有一个参数时，可以不适用括号，其它情况下都需要使用括号）
        "arrow-parens": [
            2,
            "as-needed"
        ],
        //箭头函数中的箭头前后需要留空格
        "arrow-spacing": [
            2,
            {
                "before": true,
                "after": true
            }
        ],
        // 如果代码块是单行的时候，代码块内部前后需要留一个空格
        "block-spacing": [
            2,
            "always"
        ],
        // 代码块前面需要加空格
        "space-before-blocks": [
            2,
            "always"
        ],
        // 缩进4
        "indent": ["error", 4],
        // 统一单引号 反勾号
        "quotes": ["error", "single" ,"avoid-escape"],
        // 逗号行尾 报错
        "comma-style": [2, "last"],
        // 必须再末尾写分号
        "semi": [2, "always"],
        // 最大空行数
        "no-multiple-empty-lines": [
            "error",{
                "max": 2
            }
        ],
        //在定义对象或数组时，最后一项不能加逗号
        "comma-dangle": [
            2,
            "never"
        ],
        //const申明的变量禁止修改
        "no-const-assign": 2,
        //行末禁止加空格
        "no-trailing-spaces": 2,
    },
} ;
