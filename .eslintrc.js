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
    },
    // parserOptions: {
    //     parser: "babel-eslint"
    // }
} ;
