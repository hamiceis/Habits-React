import dayjs from 'dayjs'

export function generateDatesFromYearBeginning(){
  const firstDayOfTheYear = dayjs().startOf('year') //vai pegar a data do inicio no ano 2023
  const today = new Date() //data atual

  const dates = []
  let compareDate = firstDayOfTheYear

  while(compareDate.isBefore(today)) {  //comparação se data do inicio do ano for anterior ao dia atual
    dates.push(compareDate.toDate()) 
    //converte o objeto do dayjs para uma data em formato javascript e coloca dentro de dates
    compareDate = compareDate.add(1,'day') //adiciona 1 dia, para cada iteração
  }
  return dates    //retorna um Array com todas as datas até o momento
}

