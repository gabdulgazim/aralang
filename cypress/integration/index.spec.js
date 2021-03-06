context('Main page', () => {

  it('successfully loads', () => {
    cy.visit('/')
    // cy.location().should((location) => {
    //   expect(location.href).to.eq('http://localhost:3000/aralang/')
    //   expect(location.host).to.eq('localhost:3000')
    //   // expect(location.hostname).to.eq('example.cypress.io')
    //   expect(location.pathname).to.eq('/aralang/')
    // })
  })

  // it("home  page contians meaningful text", function () {
  //   cy.contains('Ara_lang')
  //   cy.contains('Учить арабский сегодня.')
  //   cy.contains('Знакомство')
  //   cy.contains('Набор оригинальных и переведённых с английского языка постов')
  //   cy.contains('На каждый день')
  // });
  //
  // it('Get and set configuration options', () => {
  //   // https://on.cypress.io/config
  //   const myConfig = Cypress.config()
  //
  //   expect(myConfig).to.have.property('animationDistanceThreshold', 5)
  //   expect(myConfig).to.have.property('baseUrl', 'http://localhost:3000')
  //   expect(myConfig).to.have.property('defaultCommandTimeout', 4000)
  //   expect(myConfig).to.have.property('requestTimeout', 5000)
  //   expect(myConfig).to.have.property('responseTimeout', 30000)
  //   expect(myConfig).to.have.property('viewportHeight', 660)
  //   expect(myConfig).to.have.property('viewportWidth', 1000)
  //   expect(myConfig).to.have.property('pageLoadTimeout', 60000)
  //   expect(myConfig).to.have.property('waitForAnimations', true)
  //
  //   expect(Cypress.config('pageLoadTimeout')).to.eq(60000)
  //
  //   // this will change the config for the rest of your tests!
  //   Cypress.config('pageLoadTimeout', 20000)
  //
  //   expect(Cypress.config('pageLoadTimeout')).to.eq(20000)
  //
  //   Cypress.config('pageLoadTimeout', 60000)
  // })
  //
  // it('.type() - type name', () => {
  //   cy.get('[data-cy=fb-name]')
  //     .type('Feedbacker name')
  //
  //   cy.get('[data-cy=fb-name]').parent()
  //     .within(() => {
  //       cy.get('input:first')
  //         .should('have.attr',
  //           'placeholder', 'name')
  //     })
  //
  //   cy.get('[data-cy=fb-name]').parent()
  //     .within(() => {
  //       cy.get('input:first')
  //         // .should('have.text', 'Feedbacker name')
  //         .should('have.value', 'Feedbacker name')
  //     })
  //
  //
  // })
  //
  // it('.type() - type correct email', () => {
  //   // https://on.cypress.io/type
  //   cy.get('[data-cy=fb-email]')
  //     .type('fake@email.com')
  //
  //   cy.get('[data-cy=fb-email]').parent()
  //     .within(() => {
  //       cy.get('input:first')
  //         .should('have.attr',
  //           'placeholder', 'email')
  //     })
  //
  //   cy.get('[data-cy=fb-email]').parent()
  //     .within(() => {
  //       cy.get('input:first')
  //         .should('have.value', 'fake@email.com')
  //     })
  // })
  //
  // it('.type() - type subject', () => {
  //   cy.get('[data-cy=fb-subject]')
  //     .type('request feature')
  //
  // })
  //
  // it('.type() - type message', () => {
  //   cy.get('[data-cy=fb-message]')
  //     .type('Some message')
  //
  //     cy.get('[data-cy=fb-message]').parent()
  //       .within(() => {
  //         cy.get('textarea:first')
  //         .should('have.value', 'Some message')
  //       })
  // })
  //
  // it('.type()- type wrong email', () => {
  //
  //   cy.get('[data-cy=fb-email]').clear()
  //     .type('notanemail.com')
  //
  //   cy.get('[data-cy=fb-name]')
  //     .clear()
  //
  //   cy.contains('Только настоящий email')
  //     // .should('be.visible')
  // })
  //
  // it('.type()- type wrong name', () => {
  //
  //   cy.get('[data-cy=fb-name]')
  //     .type('x')
  //
  //   cy.get('[data-cy=fb-email]').clear()
  //
  //   cy.contains('Мы не знаем людей длиной имени менее двух букв')
  // })
  //
  // it('.type()- type no name', () => {
  //
  //   cy.get('[data-cy=fb-name]')
  //     .clear()
  //
  //   cy.get('[data-cy=fb-email]').clear()
  //
  //   cy.contains('Мы бы иметь представление о том, кто отправляет сообщение')
  // })
  //
  // it('.type()- type no email', () => {
  //
  //   cy.get('[data-cy=fb-email]')
  //     .clear()
  //
  //   cy.get('[data-cy=fb-name]')
  //     .clear()
  //
  //   cy.contains('Мы бы иметь представление о том, с чьей почты отправляется сообщение')
  // })

  it('can follow blog', () => {

    cy.get('[data-cy=blog]')
      .click()

    // cy.get('[data-cy=blog-col]')
    //   .click()

    cy.location().should((location) => {
          expect(location.pathname).to.eq('/aralang/blog')
    })

    cy.contains('Блог')
    cy.contains('Рады вас видеть в блоге')
  })

  // TODO: test vue method
  // it('can reset form', () => {
  //
  //   // name
  //   cy.get('[data-cy=fb-name]')
  //     .type('Feedbacker name')
  //
  //   // email
  //   cy.get('[data-cy=fb-email]')
  //     .type('fake@email.com')
  //
  //   // subject
  //   cy.get('[data-cy=fb-subject]')
  //     .type('request feature')
  //
  //   // message
  //   cy.get('[data-cy=fb-message]')
  //     .type('Message from feedbacker')
  //
  // })

  // it('can submit a feedback form', () => {
  //   // name
  //   cy.get('[data-cy=fb-name]')
  //     .type('Feedbacker name')
  //
  //   // email
  //   cy.get('[data-cy=fb-email]')
  //     .type('fake@email.com')
  //
  //   // subject
  //   cy.get('[data-cy=fb-subject]')
  //     .type('request feature')
  //
  //   // message
  //   cy.get('[data-cy=fb-message]')
  //     .type('Message from feedbacker')
  //
  //   cy.get('[data-cy=fb-form]')
  //     .submit()
  // })

  //   it('.focus() - focus on a DOM element', () => {
//     // https://on.cypress.io/focus
//     cy.get('.action-focus').focus()
//       .should('have.class', 'focus')
//       .prev().should('have.attr', 'style', 'color: orange;')
//   })
//
//   it('.blur() - blur off a DOM element', () => {
//     // https://on.cypress.io/blur
//     cy.get('.action-blur').type('About to blur').blur()
//       .should('have.class', 'error')
//       .prev().should('have.attr', 'style', 'color: red;')
//   })
//
//   it('.clear() - clears an input or textarea element', () => {
//     // https://on.cypress.io/clear
//     cy.get('.action-clear').type('Clear this text')
//       .should('have.value', 'Clear this text')
//       .clear()
//       .should('have.value', '')
//   })
//
//   it('.submit() - submit a form', () => {
//     // https://on.cypress.io/submit
//     cy.get('.action-form')
//       .find('[type="text"]').type('HALFOFF')
//
//     cy.get('.action-form').submit()
//       .next().should('contain', 'Your form has been submitted!')
//   })
//
//   it('.click() - click on a DOM element', () => {
//     // https://on.cypress.io/click
//     cy.get('.action-btn').click()
//
//     // You can click on 9 specific positions of an element:
//     //  -----------------------------------
//     // | topLeft        top       topRight |
//     // |                                   |
//     // |                                   |
//     // |                                   |
//     // | left          center        right |
//     // |                                   |
//     // |                                   |
//     // |                                   |
//     // | bottomLeft   bottom   bottomRight |
//     //  -----------------------------------
//
//     // clicking in the center of the element is the default
//     cy.get('#action-canvas').click()
//
//     cy.get('#action-canvas').click('topLeft')
//     cy.get('#action-canvas').click('top')
//     cy.get('#action-canvas').click('topRight')
//     cy.get('#action-canvas').click('left')
//     cy.get('#action-canvas').click('right')
//     cy.get('#action-canvas').click('bottomLeft')
//     cy.get('#action-canvas').click('bottom')
//     cy.get('#action-canvas').click('bottomRight')
//
//     // .click() accepts an x and y coordinate
//     // that controls where the click occurs :)
//
//     cy.get('#action-canvas')
//       .click(80, 75) // click 80px on x coord and 75px on y coord
//       .click(170, 75)
//       .click(80, 165)
//       .click(100, 185)
//       .click(125, 190)
//       .click(150, 185)
//       .click(170, 165)
//
//     // click multiple elements by passing multiple: true
//     cy.get('.action-labels>.label').click({multiple: true})
//
//     // Ignore error checking prior to clicking
//     cy.get('.action-opacity>.btn').click({force: true})
//   })
//
//   it('.dblclick() - double click on a DOM element', () => {
//     // https://on.cypress.io/dblclick
//
//     // Our app has a listener on 'dblclick' event in our 'scripts.js'
//     // that hides the div and shows an input on double click
//     cy.get('.action-div').dblclick().should('not.be.visible')
//     cy.get('.action-input-hidden').should('be.visible')
//   })
//
//   it('.rightclick() - right click on a DOM element', () => {
//     // https://on.cypress.io/rightclick
//
//     // Our app has a listener on 'contextmenu' event in our 'scripts.js'
//     // that hides the div and shows an input on right click
//     cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
//     cy.get('.rightclick-action-input-hidden').should('be.visible')
//   })
//
//   it('.check() - check a checkbox or radio element', () => {
//     // https://on.cypress.io/check
//
//     // By default, .check() will check all
//     // matching checkbox or radio elements in succession, one after another
//     cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
//       .check().should('be.checked')
//
//     cy.get('.action-radios [type="radio"]').not('[disabled]')
//       .check().should('be.checked')
//
//     // .check() accepts a value argument
//     cy.get('.action-radios [type="radio"]')
//       .check('radio1').should('be.checked')
//
//     // .check() accepts an array of values
//     cy.get('.action-multiple-checkboxes [type="checkbox"]')
//       .check(['checkbox1', 'checkbox2']).should('be.checked')
//
//     // Ignore error checking prior to checking
//     cy.get('.action-checkboxes [disabled]')
//       .check({force: true}).should('be.checked')
//
//     cy.get('.action-radios [type="radio"]')
//       .check('radio3', {force: true}).should('be.checked')
//   })
//
//   it('.uncheck() - uncheck a checkbox element', () => {
//     // https://on.cypress.io/uncheck
//
//     // By default, .uncheck() will uncheck all matching
//     // checkbox elements in succession, one after another
//     cy.get('.action-check [type="checkbox"]')
//       .not('[disabled]')
//       .uncheck().should('not.be.checked')
//
//     // .uncheck() accepts a value argument
//     cy.get('.action-check [type="checkbox"]')
//       .check('checkbox1')
//       .uncheck('checkbox1').should('not.be.checked')
//
//     // .uncheck() accepts an array of values
//     cy.get('.action-check [type="checkbox"]')
//       .check(['checkbox1', 'checkbox3'])
//       .uncheck(['checkbox1', 'checkbox3']).should('not.be.checked')
//
//     // Ignore error checking prior to unchecking
//     cy.get('.action-check [disabled]')
//       .uncheck({force: true}).should('not.be.checked')
//   })
//
//   it('.select() - select an option in a <select> element', () => {
//     // https://on.cypress.io/select
//
//     // at first, no option should be selected
//     cy.get('.action-select')
//       .should('have.value', '--Select a fruit--')
//
//     // Select option(s) with matching text content
//     cy.get('.action-select').select('apples')
//     // confirm the apples were selected
//     // note that each value starts with "fr-" in our HTML
//     cy.get('.action-select').should('have.value', 'fr-apples')
//
//     cy.get('.action-select-multiple')
//       .select(['apples', 'oranges', 'bananas'])
//       // when getting multiple values, invoke "val" method first
//       .invoke('val')
//       .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
//
//     // Select option(s) with matching value
//     cy.get('.action-select').select('fr-bananas')
//       // can attach an assertion right away to the element
//       .should('have.value', 'fr-bananas')
//
//     cy.get('.action-select-multiple')
//       .select(['fr-apples', 'fr-oranges', 'fr-bananas'])
//       .invoke('val')
//       .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
//
//     // assert the selected values include oranges
//     cy.get('.action-select-multiple')
//       .invoke('val').should('include', 'fr-oranges')
//   })
//
//   it('.scrollIntoView() - scroll an element into view', () => {
//     // https://on.cypress.io/scrollintoview
//
//     // normally all of these buttons are hidden,
//     // because they're not within
//     // the viewable area of their parent
//     // (we need to scroll to see them)
//     cy.get('#scroll-horizontal button')
//       .should('not.be.visible')
//
//     // scroll the button into view, as if the user had scrolled
//     cy.get('#scroll-horizontal button').scrollIntoView()
//       .should('be.visible')
//
//     cy.get('#scroll-vertical button')
//       .should('not.be.visible')
//
//     // Cypress handles the scroll direction needed
//     cy.get('#scroll-vertical button').scrollIntoView()
//       .should('be.visible')
//
//     cy.get('#scroll-both button')
//       .should('not.be.visible')
//
//     // Cypress knows to scroll to the right and down
//     cy.get('#scroll-both button').scrollIntoView()
//       .should('be.visible')
//   })
//
//   it('.trigger() - trigger an event on a DOM element', () => {
//     // https://on.cypress.io/trigger
//
//     // To interact with a range input (slider)
//     // we need to set its value & trigger the
//     // event to signal it changed
//
//     // Here, we invoke jQuery's val() method to set
//     // the value and trigger the 'change' event
//     cy.get('.trigger-input-range')
//       .invoke('val', 25)
//       .trigger('change')
//       .get('input[type=range]').siblings('p')
//       .should('have.text', '25')
//   })
//
//   it('cy.scrollTo() - scroll the window or element to a position', () => {
//     // https://on.cypress.io/scrollTo
//
//     // You can scroll to 9 specific positions of an element:
//     //  -----------------------------------
//     // | topLeft        top       topRight |
//     // |                                   |
//     // |                                   |
//     // |                                   |
//     // | left          center        right |
//     // |                                   |
//     // |                                   |
//     // |                                   |
//     // | bottomLeft   bottom   bottomRight |
//     //  -----------------------------------
//
//     // if you chain .scrollTo() off of cy, we will
//     // scroll the entire window
//     cy.scrollTo('bottom')
//
//     cy.get('#scrollable-horizontal').scrollTo('right')
//
//     // or you can scroll to a specific coordinate:
//     // (x axis, y axis) in pixels
//     cy.get('#scrollable-vertical').scrollTo(250, 250)
//
//     // or you can scroll to a specific percentage
//     // of the (width, height) of the element
//     cy.get('#scrollable-both').scrollTo('75%', '25%')
//
//     // control the easing of the scroll (default is 'swing')
//     cy.get('#scrollable-vertical').scrollTo('center', {easing: 'linear'})
//
//     // control the duration of the scroll (in ms)
//     cy.get('#scrollable-both').scrollTo('center', {duration: 2000})
//   })
})
