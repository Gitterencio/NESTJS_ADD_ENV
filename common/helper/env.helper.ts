import { existsSync,readFileSync } from 'fs';
import  {join, resolve } from 'path';

export function getEnvPath(dest: string): string {
  const env: string | undefined = process.env.NODE_ENV;
  const fallback: string = resolve(`${dest}/default.env`);
  const filename: string = env ? `${env}.env` : 'default.env';
  let filePath: string = resolve(`${dest}/${filename}`);


  if (!existsSync(filePath)) {
    filePath = fallback;
    delete process.env.NODE_ENV
  }
 // console.log(getSqlFromFile("index"))

  return filePath;
}

export  function  getSqlFromFile(file:string):string{
    const filePath =join(__dirname,"../sql",`${file}.sql`);
    if (!existsSync(filePath)) {
        return ""
    }
    const sql = readFileSync(filePath, 'utf-8');
    return sql
}