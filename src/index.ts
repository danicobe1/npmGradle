import * as express from 'express';
import { Request, Response } from 'express';
import { queries } from './hardcodedQueries';

import * as bodyParser from 'body-parser';
// import { bodyParser } from 'body-parser';

const app = express();
const que = new queries();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
const {
  PORT = 3000,
} = process.env;

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world x2',
  });
});

app.get('/students',que.getStudents);

// app.post('/student',que.createStudent);
app.post('/student',(req: Request, res: Response)=>{  
  res.send(JSON.stringify(req.body))  
});

if (require.main === module) { // true if file is executed
  app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
  });
}






export default app;




