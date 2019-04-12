module.exports = {
  presets: [
   	"@babel/preset-react", 
   	["@babel/preset-env",{
        useBuiltIns: "entry",
        corejs: 2
    }],
  ],
  plugins: ["@babel/plugin-syntax-dynamic-import",'@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties']
}