const {create,all} =  require ('mathjs')

// 创建一个带配置的mathjs实例
const config = {
  epsilon: 1e-60,
  matrix: 'Matrix',
  number: 'BigNumber',  
  precision: 64,
  predictable: false,
  randomSeed: null
}
const math = create(all, config)




  module.exports = math