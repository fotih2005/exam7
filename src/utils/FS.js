import fs from 'fs' 
import path from 'path'

const read = dir => JSON.parse(fs.readFileSync(path.normalize(`${process.cwd()}/src/model/${dir}`)))

const write = (dir, data) => {
    return new Promise((res, rej) => {
        fs.writeFileSync(path.normalize(`${process.cwd()}/src/model/${dir}`), JSON.stringify(data, null, 4), err => {
            if(err) rej(err)
            res('ok')
        })

    })
}

export {
    read,
    write
}