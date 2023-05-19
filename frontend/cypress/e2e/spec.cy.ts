describe('log in and out', () => {
    it('default path gets redirected bacause it is not authorized', () => {
        cy.visit('http://localhost:4200/')
        cy.location('pathname').should('eq', '/login')
    })

    it('login page has a login form', () => {
        cy.visit('http://localhost:4200/login')
        cy.get('form').should('exist')
        cy.contains('Log in')
        cy.contains('Register')

        cy.get('input[name="email"]').should('exist')
        cy.get('input[name="password"]').should('exist')
        cy.get('app-navbar').should('exist')
        cy.get('app-footer').should('exist')
        cy.get('app-footer').contains('© 2023 Let Me In™. All Rights Reserved.')
    })

    it('logging in successfully redirects to the landing page', () => {
        cy.visit('http://localhost:4200/login')
        cy.get('input[name="email"]').type('admin')
        cy.get('input[name="password"]').type('admii')
        cy.get('button[type="submit"]').click()
        cy.contains("Holy smokes! The username and password does not match.")

        cy.get('input[name="email"]').clear().type('admin')
        cy.get('input[name="password"]').clear().type('admin')
        cy.get('button[type="submit"]').click()
        cy.location('pathname').should('eq', '/')
    })

    it('logging out successfully redirects to the login page', () => {
        cy.visit('http://localhost:4200/login')
        cy.get('input[name="email"]').type('admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('button[type="submit"]').click()
        cy.location('pathname').should('eq', '/')
        cy.get('app-navbar').contains('Log out')
        cy.get('app-navbar').contains('Log out').click()
        cy.location('pathname').should('eq', '/login')
    })

    it('when logging in, token is stored in local storage', () => {
        cy.visit('http://localhost:4200/login')
        cy.get('input[name="email"]').type('admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('button[type="submit"]').click()
        cy.location('pathname').should('eq', '/')
        cy.window().then((win) => {
            expect(win.localStorage.getItem('token')).to.exist
            expect(win.localStorage.getItem('email')).to.exist
        })
    })
})

describe('using pages', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/login')
        cy.get('input[name="email"]').type('admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('button[type="submit"]').click()
        cy.location('pathname').should('eq', '/')
        cy.contains('admin')
        cy.contains('Home')
        cy.contains('Events')
        cy.contains('Applications')
        cy.contains('Log out')
        cy.contains('Users')
        cy.contains('Create Event')
    })

    it('clicking to create event has a form', () => {
        cy.contains('Create Event').click()
        cy.location('pathname').should('eq', '/newevent')
        cy.contains('Create new event')
        cy.get('form').should('exist')
        cy.get('input[name="name"]').should('exist')
        cy.get('input[name="venue"]').should('exist')
        cy.contains('Submit')
    })

    it('all events page has 6 events',()=>{
        cy.visit('http://localhost:4200/events')
        cy.get('app-event').its('length').should('eq', 6)
        cy.contains('magyar kupa')
        cy.contains('Falco Volcano - ZTE KK')
        cy.contains('ZTE - Falco')
        cy.contains('Peaky Blinders Season 7')
        cy.contains('Family guy binge watching')
        cy.contains('példa')
    })

    it('admin is not an organizer so cannot delete event', () => {
        cy.visit('http://localhost:4200/events')
        cy.contains('Peaky Blinders Season 7').click()
        cy.contains('Delete event').should('not.exist')
    })

    it('clicking on an event redirects to the event details page',()=>{
        cy.visit('http://localhost:4200/events')
        cy.contains('példa').click()
        cy.location('pathname').should('eq', '/events/6465e39c7636972b27835b05')
        cy.contains('Decline application')
        cy.contains('Apply')
        cy.contains('admin admin')
        cy.contains('Delete event')
    })

    it('applying and declining application', () => {
        cy.visit('http://localhost:4200/events/6465e39c7636972b27835b05')
        cy.contains('Apply').click()
        cy.contains('You already applied for this event')
        cy.get('app-user').its('length').should('eq', 2)
        cy.contains('Decline application').should('exist')
        cy.contains('Decline application').click()
        cy.get('app-user').its('length').should('eq', 1)
        cy.contains('Apply').should('exist')
        cy.contains('Apply').click()
        cy.get('app-user').its('length').should('eq', 2)
        cy.contains('Application sent').should('exist')
    })

    it('all users', () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Users').click()
        cy.get('app-user').its('length').should('eq', 12)
        cy.contains('admin')
        cy.contains('user 2')
        cy.contains('first second')
        cy.contains('Bob Smith')
        cy.contains('Kristóf Tóth')
        cy.contains('Tocsik Márta')
        cy.contains('Paroczi Zsombor')
        cy.contains('Matolcsy György')
        cy.contains('Marcus Hilken')
        cy.contains('Péter Oszkó')
    })

    it('all applications', () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Applications').click()
        cy.get('app-application').its('length').should('eq', 13)
        cy.contains('Payment method: Cash')
        cy.contains('Status: Pending')
    })
})

describe('creating event', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/login')
        cy.get('input[name="email"]').type('admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('button[type="submit"]').click()
        cy.location('pathname').should('eq', '/')
        cy.contains('Create Event').click()
    })

    it('disabled event creation', () => {
        cy.get('form').should('exist')
        cy.get('input[name="name"]').should('exist').type('this is a test event')
        cy.get('input[name="venue"]').should('exist').type('this is a test venue')
        cy.get('button[type="submit"]').should('be.disabled')
        cy.contains('Your data is invalid! Please insert valid data!')
    })
})
