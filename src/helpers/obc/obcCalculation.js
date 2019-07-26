import _ from 'lodash'

const obcMethods = {
  obcCalc (obc) {
    const firstCol = [
      ['x']
    ]
    const secondCol = [
      ['# Processo']
    ]
    const thirdCol = [
      ['Takt']
    ]
    const fourthCol = [
      ['Ciclo']
    ]
    const processIdUniqArray = _.uniq(obc.map(proc => proc.processId))
    const finalFirstCol = _.flattenDeep(firstCol.concat(processIdUniqArray))
    const groups = []
    for (let i = 0; i < processIdUniqArray.length; i++) {
      const processByBox = obc
        .filter(proc => proc.processId === processIdUniqArray[i])
        .map(proc => proc.lowRepCycle)
        .reduce((acc, curr) => acc + curr)
      groups.push(processByBox)
    }
    const finalSecondCol = _.flattenDeep(secondCol.concat(groups))
    const almostFinalThirdCol = []
    const almostFinalFourthCol = []
    for (let i = 0; i < processIdUniqArray.length; i++) {
      const processByBox = obc
        .filter(proc => proc.processId === processIdUniqArray[i])
        .map(proc => proc.takt)
      almostFinalThirdCol.push(_.uniq(processByBox))
    }
    const finalThirdCol = thirdCol.concat(_.flattenDeep(almostFinalThirdCol))
    for (let i = 0; i < processIdUniqArray.length; i++) {
      const processByBox = obc
        .filter(proc => proc.processId === processIdUniqArray[i])
        .map(proc => proc.cycle)
      almostFinalFourthCol.push(_.uniq(processByBox))
    }
    const finalFourthCol = fourthCol.concat(_.flattenDeep(almostFinalFourthCol))
    return {
      finalFirstCol,
      finalSecondCol,
      finalThirdCol,
      finalFourthCol
    }
  }
}

export default obcMethods
