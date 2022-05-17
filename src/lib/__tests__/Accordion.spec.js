/* eslint-disable no-undef */
import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/svelte'

import Accordion from '../components/Accordion/Accordion'
import AccordionItem from '../components/Accordion/AccordionItem'
import AccordionHeader from '../components/Accordion/AccordionHeader'
import AccordionButton from '../components/Accordion/AccordionButton'
import AccordionPanel from '../components/Accordion/AccordionPanel'

// List of Accordion Parts:
    // - Accordion: contains accordion item(s)
        // - Accordion Item: contains header and panel
            // - Accordion Header: contains button
                // - Accordion Button: labels header
            // - Accordion Panel: contains contents



describe('Accessible Accordion Unit Tests', () => {
    
    describe('Button Unit Tests', () => {

        const options =  {
            multiselectable: true,
            headerLevel: 4,
            panelInfo: [
                {
                id: 1,
                panelContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Cursus eget nunc scelerisque viverra mauris. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Nisl vel pretium lectus quam id. Ultrices eros in cursus turpis massa. Mauris pharetra et ultrices neque. Tristique senectus et netus et malesuada fames ac turpis. Turpis tincidunt id aliquet risus feugiat in ante metus. Pellentesque habitant morbi tristique senectus et netus et malesuada.",
                headerTitle: "First Section",
                },
                {
                id: 2,
                panelContent: "Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ut enim blandit volutpat maecenas volutpat blandit. Mi ipsum faucibus vitae aliquet nec. Dui ut ornare lectus sit amet est placerat in. Convallis convallis tellus id interdum. Vitae aliquet nec ullamcorper sit amet risus. Eu mi bibendum neque egestas congue quisque egestas diam in. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Ullamcorper a lacus vestibulum sed. Vitae purus faucibus ornare suspendisse. Curabitur gravida arcu ac tortor dignissim convallis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Id leo in vitae turpis massa sed. Faucibus interdum posuere lorem ipsum dolor.",
                headerTitle: "Second Section",
                }
            ]
        }

        //BeforeEach render an AccordionButton for testing
        // beforeEach((done) => {
            // const results = render(AccordionButton/*, {options} */)
            const {component, getByText, getAllByRole, ...queries} = render(Accordion, {options})
            console.log('queries:', queries)
            console.log(component['$$'].ctx[0])
            const headers = getAllByRole('heading')
            console.log(headers[0].getAttribute('role'))
            // expect(getByText('First Section')).toBeInTheDocument()
            // it('should contain the textToRead passed in as an option', () => {
            //     const {getByText, component, ...queries} = render(AccordionButton, {
            //         isOpen: false,
            //         controls: 'panel1',
            //         textToRead: 'This is text',
            //         id: 'button1',
            //         headerTitle: 'First Section'
            //     })
            //     console.log('component',component)
            //     console.log(queries)
            //     expect(getByText('First Section')).toBeInTheDocument()
            // })


            // return done
        // })

        // Does the button have a role attribute of button
        it('should have a role attribute set to button', () => {
            // let button = getAllByRole('button');
            // console.log(button)
        })
        // Does the button have 0 siblings?? 

        // Does the button have an attribute aria-expanded

        // Is aria-expanded false when button is inactive and true when active

        // Does the button have toggle ability

    })

    


//******* Header Tests *******//

    //******* Header Unit Tests *******//

        // Is the title of the header an element with role button

        // Is the role of the header set to heading

        // Is the value a valid aria-level/number 1-6

    

//******* Panel Tests *******//

    //******* Panel Unit Tests *******//

        // Does the panel have a role attribute set to region



//******* Item Tests  *******// 

    //******* Item Unit Tests *******//

        // Does the item have a state attribute

//******* Accordion Tests *******//

    // Does the Accordion have an aria-multiselectable attribute set to false





})

//******* INTEGRATION TESTS *******//

    //******* Button Integration Tests  *******//

        // Does the button contain an aria-controls attribute set to the ID of 
        // the panel it controls

    //******* Header Integration Tests *******//

    //******* Panel Integration Tests *******//

        // Does the panel have an aria-labelledby attribute refering to the button element
        // it is controlled by

    //******* Item Integration Tests *******//

        // Does the Item state attribute toggle with associated button click

        // Does the item have 2 children

        // Does the item have a header child first

        // Does the item have a panel child second






// Can space/enter expand the focused content panel

// Does one


