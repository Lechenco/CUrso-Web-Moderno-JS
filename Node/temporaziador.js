const schedule = require('node-schedule')

//*/5 * 19 * * 3 regra do disparo da funcao
const tarefa1 = schedule.scheduleJob('*/5 * 19 * * 3', function () {
    console.log('Executando tarefa1', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando tareda1')
}, 20000)

// setImmediate()
// setInterval()

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 19
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa2', new Date().getSeconds())
})