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
    action: '/2',
    image: (
      <div style={{
          display: 'flex',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          position: 'relative',
          overflow: 'hidden'
      }}>
          <img width="1200" height="630" alt="background" src={`/10.png`} style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover'}} />
          
          <div
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  color: '#161B33',
                  fontSize: '75px',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.035em',
                  width: '90%',
                  padding: '10px',
                  top: '6%',
                  height: '30%',
                  overflow: 'hidden',
                  lineHeight: 0.6,
                  textAlign: 'right',
                  transform: 'translateX(-60px)'
              }}
          >
              <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  flexWrap: 'wrap'
              }}>
                  <div style={{ marginRight: '10px' }}>Did</div>
                  <div style={{display: 'flex', color: '#E5383B', margin: '0 10px' }}>{delegate || 'delegate'}</div>
                  <div style={{ marginLeft: '10px' }}>vote</div>
                  <div style={{ marginLeft: '10px' }}>in</div>
                  <div style={{ marginLeft: '10px' }}>the</div>
                  <div style={{ marginLeft: '10px' }}>most</div>
                  <div style={{ marginLeft: '10px' }}>recent</div>
                  <div style={{ marginLeft: '10px' }}>proposal?</div>
              </div>
          </div>
      </div>
  ),
 

    intents: [
      <Button value="next">next</Button>,
      //SHARE BUTTON 
      <Button.Link href='https://warpcast.com/~/compose?text=Check%20if%20you%20have%20an%20active%20Optimism%20delegate!%20%F0%9F%98%83&embeds[]=https://test-frame-nu.vercel.app/api'>Share</Button.Link>,

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

//social graph only 1 delegate

app.frame('/4', (c) => {
  const { buttonValue, inputText, status } = c;
  const delegate = inputText || buttonValue;
  return c.res({
    action: '/5',
    image: (
      <div
        style={{
          display: 'flex',
          background: '#f6f6f6',
          alignItems: 'center',
          position: 'relative',
        }}
      > 
        <img width="1200" height="630" alt="background" src={`/13.png`} />
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
            top: '30%',
            height: '80%',
          }}>      

          {/* Container for items */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            marginRight: '-1200px', 
            marginTop: '0px',
            textAlign: 'right',
            width: '100%',
            maxWidth: '100%',
          }}>
            {/* delegate */}
            <div style={{
              color: '#E5383B',
              marginLeft: '0 auto',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              height: 'auto',
            }}>                    
              opmichael.eth
            </div>
          </div>

          {/* Second Row */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '390px', 
            marginTop: '35px',
            textAlign: 'right',
            width: '100%',
            maxWidth: '100%',
            
          }}>
            <div style={{
              color: '#000000',
              margin: '0 auto',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              height: 'auto',
            }}>                    
              1
            </div>
          </div>
          
        </div>
      </div>
    ),
    intents: [
      <Button value="next">next</Button>,
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  });
});

//social graph only 2 delegates

app.frame('/5', (c) => {
  const { buttonValue, inputText, status } = c;
  const delegate = inputText || buttonValue;
  return c.res({
    action: '/6',
    image: (
      <div
        style={{
          display: 'flex',
          background: '#f6f6f6',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <img width="1200" height="630" alt="background" src={`/12.png`} />
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
            top: '23%',
            height: '80%',
          }}
        >
          {/* First Row */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '100%',
              paddingLeft: '200px', 
              paddingRight: '200px',
            }}
          >
            {/* delegate 1*/}
            <div
              style={{
                color: '#E5383B',
                margin: '0 45px',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                height: 'auto',
                
              }}
            >
              MULUNEISER
            </div>

            {/* delegate 2 */}
            <div
              style={{
                color: '#E5383B',
                margin: '0 45px',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                height: 'auto',
              }}
            >
              0X00...0000
            </div>
          </div>

          {/* Second Row */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '100%',
              marginTop: '33px',
              paddingLeft: '250px', 
              paddingRight: '250px',
            }}
          >
            {/* Number 2 */}
            <div
              style={{
                color: '#000000',
                margin: '0 100px',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                height: 'auto',
              }}
            >
              00
            </div>

            {/* Number 3 */}
            <div
              style={{
                color: '#000000',
                margin: '0 100px',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                height: 'auto',
              }}
            >
              00
            </div>
          </div>
        </div>
      </div>
    ),
    intents: [
      <Button value="next">next</Button>,

      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  });
});


app.frame('/6', (c) => { //random by error 
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

