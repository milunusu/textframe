/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'


const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  title: 'frametext',
  /*   verify: 'silent', */
  imageOptions: {
    fonts: [
      {
        name: 'Koulen',
        weight: 400,
        source: 'google',
      }
    ]
  }
})

app.frame('/0', (c) => {
  const { buttonValue, inputText, status } = c
  const delegate = inputText || buttonValue
  return c.res({
    action: '/1',
    image: 'http://localhost:3000/3.png',
    intents: [
      <TextInput placeholder="delegate name" />,
      <Button value="next">next</Button>,
     
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

app.frame('/1', (c) => {
  const { buttonValue, inputText, status } = c;
  const delegate = inputText || buttonValue || ''; 

  return c.res({
    action: '/1',
    image: (
      <div style={{
        display: 'flex',
        background: '#f6f6f6',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative'
      }}>
        {/* @ts-ignore */}
        <img width="1200" height="630" alt="background" src={`/0.png`} style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover'}} />
        <div
          style={{
            position: 'absolute',
            color: '#000000', 
            fontSize: '75px', 
            fontWeight: 'bold', 
            lineHeight: '0.7', 
            textTransform: 'uppercase', 
            letterSpacing: '-0.030em',
            whiteSpace: 'wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%', 
            margin: '20px', 
            paddingLeft: '25px',
            paddingRight: '25px',
            left: '-20px', 
            top: '20px', 
            textAlign: 'center', 
          }}
        >
          {status === 'response'
            ? `did ${delegate ? delegate.toUpperCase() : ''} voted in the most recent proposal? `
            : 'Welcome!'}
        </div>
      </div>
    ),
    intents: [
  
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  });
});


devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);

