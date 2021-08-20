const User = require('../models/User')

describe('User', () => {
    it('should create an object with a first and last name, email address, and password if provided valid arguments', () => {
        const user = new User(
            'Brandon',
            'Gunzel',
            'brandon@email.com',
            'password'
        )

        expect(user.firstName).toEqual('Brandon')
        expect(user.lastName).toEqual('Gunzel')
        expect(user.email).toEqual('brandon@email.com')
        expect(user.password).toEqual(expect.anything())
    })

    it('should throw an error if provided no arguments', () => {
        const cb = () => new User()

        expect(cb).toThrow()
    })

    it('should throw and error if provided with an invalid email', () => {
        const cb = () => new User('Brandon', 'Gunzel', 'brando', 'password')

        const err = new Error('Email must be a valid email!')

        expect(cb).toThrowError(err)
    })

    it('should return a hashed password', () => {
        const user = new User(
            'Brandon',
            'Gunzel',
            'brandon@email.com',
            'password'
        )

        expect(user.password).not.toEqual('password')
        expect(user.password).toHaveLength(60)
    })
})
