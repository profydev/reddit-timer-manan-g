import {rest} from 'msw';
import jsresponse from './reddit-response-1.json'
import jsresponse2 from './reddit-response-2.json'

export const handlers = [
  rest.get('https://www.reddit.com/r/javascript/new.json',(req,res,ctx)=>{
    return res(
      ctx.status(200),
      ctx.json(jsresponse)
    )
  }),
  rest.get('https://www.reddit.com/r/react/new.json',(req,res,ctx)=>{
    return res(
      ctx.status(200),
      ctx.json(jsresponse2)
    )
  }),
]