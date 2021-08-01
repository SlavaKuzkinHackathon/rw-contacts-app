import React from 'react'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { Contacts } from '../pages/Contacts'

const handlers = [
    rest.get('https://randomuser.me/api/?results=10', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
              results:[{

              }],
            }),
          )
    })
]
const server = setupServer(...handlers)

test(`contacts get data success` ,async () =>{
    render (<Contacts/>)

    const loader = screen.getByTestId('contacts-loader')

    expect(loader).toBeInTheDocument()
    await waitForElementToBeRemoved(loader)
    screen.debug()
})

//15.39 https://www.youtube.com/watch?v=Pu8VaFPyp00&list=PL5m6RnG9Ag1OiUGO-O20QLaRU6zGMB6HN&index=4