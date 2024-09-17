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

app.frame('/1', (c) => { //good delegate
  const { buttonValue, inputText, status } = c;
  const delegate = inputText || buttonValue || ''; 

  return c.res({
    action: '/2',
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
       
        <img width="1200" height="630" alt="background" src={`/10.png`} style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover'}} />
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
            : ''}
        </div>
      </div>
    ),
    intents: [
      <Button value="next">next</Button>,
  
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  });
});

app.frame('/2', (c) => { // random recommendation
  const { buttonValue, inputText, status } = c
  const delegate = inputText || buttonValue
  
  return c.res({
    action: '/3',
    image: (  
      <div
        style={{
          display: 'flex',
          background: '#f6f6f6',
          alignItems: 'center',
          position: 'relative',
        }}
      > 
        <img width="1200" height="630" alt="background" src={`/2.png`} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            color: '#161B33',
            fontSize: '65px',
            textTransform: 'uppercase',
            letterSpacing: '-0.030em',
            width: '100%',
            boxSizing: 'border-box',
            alignItems: 'center',
            lineHeight: 0.8,
            padding: '0px 50px',
            overflow: 'hidden', 
            textOverflow: 'ellipsis',
            textAlign: 'center', 
            top: '30%',
            height: '80%',
          }}>      
          {/* Container for items */}
          <div style={{
            display: 'flex',
            flexDirection: 'row', // Items in one row
            justifyContent: 'space-between', // Space items evenly
            width: '100%',
            maxWidth: '100%',
          }}>
            {/* Item 1 */}
            <div style={{
              color: '#36A4B4',
              marginLeft: '8%',
              marginRight: '0',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              height: 'auto',
            }}>                    
              item 1
            </div>

            {/* Item 2 centered */}
            <div style={{
              color: '#E5383B',
              marginLeft: '3%',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              height: 'auto',
            }}>                    
              item 2
            </div>

            {/* Item 3 */}
            <div style={{
              color: '#36A4B4',
              margin: '0 50px', // Space for item 3
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              height: 'auto',
            }}>                    
              item 3
            </div>
          </div>
        </div>
      </div>
      
      ),
    intents: [
      <Button value="next">next</Button>,
     
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})


  

app.frame('/3', (c) => { //reccomendation by social graph 
  const { buttonValue, inputText, status } = c
  const delegate = inputText || buttonValue
  return c.res({
    action: '/4',
    image: (  
      <div
        style={{
          display: 'flex',
          background: '#f6f6f6',
          alignItems: 'center',
          position: 'relative',
        }}
      > 
        <img width="1200" height="630" alt="background" src={`/8.png`} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            color: '#161B33',
            fontSize: '65px',
            textTransform: 'uppercase',
            letterSpacing: '-0.030em',
            width: '100%',
            boxSizing: 'border-box',
            alignItems: 'center',
            lineHeight: 0.8,
            padding: '0px 20px',
            overflow: 'hidden', 
            textOverflow: 'ellipsis',
            textAlign: 'center', 
            top: '22%',
            height: '80%',
          }}>      
          {/* Container for items */}
          <div style={{
            display: 'flex',
            flexDirection: 'row', // Items in one row
            justifyContent: 'space-between', // Space items evenly
            width: '100%',
            maxWidth: '100%',
          }}>
            {/* Item 1 */}
            <div style={{
              color: '#36A4B4',
              marginLeft: '1%',
              marginRight: '0%',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              height: 'auto',
            }}>                    
              opmichael.eth
            </div>

            {/* Item 2 centered */}
            <div style={{
              color: '#E5383B',
              marginLeft: '0%',
              marginRight: '2%',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              height: 'auto',
            }}>                    
              muluneiser
            </div>

            {/* Item 3 */}
            <div style={{
              color: '#36A4B4',
              marginLeft: '0%',
              marginRight: '3%',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              height: 'auto',
            }}>                    
              0x00...0000
            </div>
          </div>

          {/* Second Row */}
          <div style={{
            display: 'flex',
            flexDirection: 'row', // Items in one row
            justifyContent: 'space-between', // Space items evenly
            width: '100%',
            maxWidth: '100%',
            marginTop: '36px',
          }}>
            <div style={{
              color: '#000000',
              marginLeft: '14%',
              marginRight: '0%',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              height: 'auto',
            }}>                    
              3
            </div>
            <div style={{
              color: '#000000',
              margin: '0 auto',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              height: 'auto',
            }}>                    
              22
            </div>
            <div style={{
              color: '#000000',
              marginLeft: '0%',
              marginRight: '11%',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              height: 'auto',
            }}>                    
              109
            </div>
          </div>
          
        </div>
      </div>
      
      ),
       
     
    intents: [
      <Button value="next">next</Button>,
     
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})
   

app.frame('/4', (c) => { //random by error 
  const { buttonValue, inputText, status } = c
  const delegate = inputText || buttonValue
  
  return c.res({
    action: '/0',
    image: (  
      <div
        style={{
          display: 'flex',
          background: '#f6f6f6',
          alignItems: 'center',
          position: 'relative',
        }}
      > 
        <img width="1200" height="630" alt="background" src={`/4.png`} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            color: '#161B33',
            fontSize: '65px',
            textTransform: 'uppercase',
            letterSpacing: '-0.030em',
            width: '100%',
            boxSizing: 'border-box',
            alignItems: 'center',
            lineHeight: 0.8,
            padding: '0px 50px',
            overflow: 'hidden', 
            textOverflow: 'ellipsis',
            textAlign: 'center', 
            top: '30%',
            height: '80%',
          }}>      
          {/* Container for items */}
          <div style={{
            display: 'flex',
            flexDirection: 'row', // Items in one row
            justifyContent: 'space-between', // Space items evenly
            width: '100%',
            maxWidth: '100%',
          }}>
            {/* Item 1 */}
            <div style={{
              color: '#36A4B4',
              marginLeft: '8%',
              marginRight: '0',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              height: 'auto',
            }}>                    
              item 1
            </div>

            {/* Item 2 centered */}
            <div style={{
              color: '#E5383B',
              marginLeft: '3%',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              height: 'auto',
            }}>                    
              item 2
            </div>

            {/* Item 3 */}
            <div style={{
              color: '#36A4B4',
              margin: '0 50px', // Space for item 3
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              height: 'auto',
            }}>                    
              item 3
            </div>
          </div>
        </div>
      </div>
      
      ),
    intents: [
      <Button value="next">next</Button>,
     
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);

