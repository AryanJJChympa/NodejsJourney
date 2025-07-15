import chalk from 'chalk'; //third-party
import os from 'node:os' //inbuilt

function monitor() {
    const oldCpu = os.cpus();

    setTimeout(() => {
        const newCpu = os.cpus();

        const usage = newCpu.map((cpu, index) => {
            return {
                core: index,
                usage: calculateCPU(oldCpu[index], newCpu[index]) + '%',
            };
        });

        console.clear();
        console.log(chalk.bgMagentaBright(`======System Stats=====`));

        console.table(usage);

        const usedMemory = (os.totalmem() - os.freemem()) / (1024 * 1024 * 1024);
        const totalMemory = os.totalmem() / (1024 * 1024 * 1024);

        console.log(
            'Memory used: ',
            usedMemory > 6
            ?chalk.redBright(`Memory used: ${usedMemory.toFixed(2)} GB / ${totalMemory.toFixed(2)} GB`)
            : chalk.greenBright(`Memory used: ${usedMemory.toFixed(2)} GB / ${totalMemory.toFixed(2)} GB`)
        )

        // console.log(`Memory used: ${usedMemory.toFixed(2)} GB / ${totalMemory.toFixed(2)} GB`);
    }, 1000);
}

function calculateCPU(oldCpu, newCpu) {
    const oldTotal = Object.values(oldCpu.times).reduce((a, b) => a + b, 0);
    const newTotal = Object.values(newCpu.times).reduce((a, b) => a + b, 0);

    const idle = newCpu.times.idle - oldCpu.times.idle;
    const total = newTotal - oldTotal;
    const used = total - idle;

    return ((100 * used) / total).toFixed(1);
}

setInterval(monitor, 1000);



// oldCpus [
//   {
//     model: '11th Gen Intel(R) Core(TM) i5-11400H @ 2.70GHz',
//     speed: 2688,
//     times: { user: 381062, nice: 0, sys: 330937, idle: 7952140, irq: 60640 }
//   },
//   {
//     model: '11th Gen Intel(R) Core(TM) i5-11400H @ 2.70GHz',
//     speed: 2688,
//     times: { user: 184718, nice: 0, sys: 118312, idle: 8361046, irq: 6921 }
//   },
//   {
//     model: '11th Gen Intel(R) Core(TM) i5-11400H @ 2.70GHz',
//     speed: 2688,
//     times: { user: 731875, nice: 0, sys: 277859, idle: 7654343, irq: 22312 }
//   },
//   {
//     model: '11th Gen Intel(R) Core(TM) i5-11400H @ 2.70GHz',
//     speed: 2688,
//     times: { user: 235781, nice: 0, sys: 160343, idle: 8267953, irq: 4968 }
//   },
//   {
//     model: '11th Gen Intel(R) Core(TM) i5-11400H @ 2.70GHz',
//     speed: 2688,
//     times: { user: 523562, nice: 0, sys: 252937, idle: 7887578, irq: 13234 }
//   },
//   {
//     model: '11th Gen Intel(R) Core(TM) i5-11400H @ 2.70GHz',
//     speed: 2688,
//     times: { user: 206984, nice: 0, sys: 117875, idle: 8339218, irq: 6890 }
//   },
//   {
//     model: '11th Gen Intel(R) Core(TM) i5-11400H @ 2.70GHz',
//     speed: 2688,
//     times: { user: 596921, nice: 0, sys: 310625, idle: 7756531, irq: 16000 }
//   },
//   {
//     model: '11th Gen Intel(R) Core(TM) i5-11400H @ 2.70GHz',
//     speed: 2688,
//     times: { user: 218500, nice: 0, sys: 106171, idle: 8339406, irq: 4671 }
//   },
//   {
//     model: '11th Gen Intel(R) Core(TM) i5-11400H @ 2.70GHz',
//     speed: 2688,
//     times: { user: 492125, nice: 0, sys: 235906, idle: 7936046, irq: 13296 }
//   },
//   {
//     model: '11th Gen Intel(R) Core(TM) i5-11400H @ 2.70GHz',
//     speed: 2688,
//     times: { user: 223140, nice: 0, sys: 113171, idle: 8327750, irq: 7921 }
//   },
//   {
//     model: '11th Gen Intel(R) Core(TM) i5-11400H @ 2.70GHz',
//     speed: 2688,
//     times: { user: 540078, nice: 0, sys: 210656, idle: 7913343, irq: 15250 }
//   },
//   {
//     model: '11th Gen Intel(R) Core(TM) i5-11400H @ 2.70GHz',
//     speed: 2688,
//     times: { user: 214890, nice: 0, sys: 102031, idle: 8347156, irq: 6859 }
//   }
// ]