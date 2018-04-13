var webpack = require('webpack');
const path = require('path'); //경로를 쉽게 사용하기 위해.
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: "development", //빌드 모드를 설정하는 옵션입니다.
    entry: {
        index: './index.js' //트리의 root(즉, 시작 입구. ENTRY!)
        //entry는 여러개가 될 수 있으므로 객체로 받음.(multi entry의 경우 갯수만큼의 번들이 만들어지겠죠?)
    },
    output: {
        path: path.resolve(__dirname, "dist"), //번들링된 output이 저장될 경로입니다. (__dirname은 현재경로)
        filename: '[name].js', 
        //번들링되어 만들어질 파일명입니다. 직접 지정해두어도 되지만, 엔트리가 여러개 될 수도 있으므로,
        //다음과 같이 [name]을 사용하여 위의 entry에서 설정한 key를 이용합니다.
        //ex) A: 'test.js' 라고 했을경우, A가 됩니다.(위에선 index)
        publicPath: '/assets/'
        //각 모듈에서 공통으로 사용될 파일이 있을수 있습니다.(이미지파일, json, 텍스트 등등)
        //그 파일들을 위한 디렉토리 경로를 설정하는 옵션입니다.
    },
    module: {
        //앞서 설명한 loader를 사용하기 위한 설정. (css로더 예)
        rules: [
            { test: /\.css$/, use: 'css-loader' }
            //test: (위 표현은 *.css의 정규표현식입니다.) *.css파일일경우 이 로더를 사용한다는 뜻입니다.
            //use: 사용할 loader입니다. 기본으로 제공되는 로더가 아닐경우 npm으로 받아야합니다.
            //4.0부터 json 로더는 기본 내장로더로 바뀌었습니다.
        ],
    },
    plugins:[ //번들링 과정에서 더욱 편리하기 번들해주기 위해서 부가적으로 사용되는 것들.
    ],
    optimization: {
        minimizer: [
            new UglifyJSPlugin()
        ],
    },
}