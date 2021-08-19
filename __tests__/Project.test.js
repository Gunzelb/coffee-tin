const Project = require('../models/Project')

describe('Project', () => {
    it('should create an object that has a name, details, goal, deadline, and rewards object', () => {
        const project = new Project(
            'Coffee Tin',
            'a crowdfunding app',
            5000,
            '8/17/2022',
            {},
            {}
        )

        expect(project.name).toEqual('Coffee Tin')
        expect(project.details).toEqual('a crowdfunding app')
        expect(project.goal).toEqual('5000')
        expect(project.deadline).toEqual('8/17/2022')
    })

    it("should throw an error if 'goal' is not a number", () => {
        const cb = () =>
            new Project(
                'Coffee Tin',
                'a crowdfunding app',
                'a lot',
                '8/17/2022',
                {},
                {}
            )

        const err = new Error(
            "Expected parameter 'goal' to be a non-negative number"
        )
        expect(cb).toThrowError(err)
    })

    it("should throw an error if 'goal' is a negative number", () => {
        const cb = () =>
            new Project(
                'Coffee Tin',
                'a crowdfunding app',
                -200,
                '8/17/2022',
                {},
                {}
            )

        const err = new Error(
            "Expected parameter 'goal' to be a non-negative number"
        )

        expect(cb).toThrowError(err)
    })

    it("should throw an error if 'name' is not a string", () => {
        const cb = () =>
            new Project(3, 'a crowdfunding app', 5000, '8/17/2022', {}, {})
        const err = new Error(
            "Expected parameter 'name' to be a non-empty string"
        )

        expect(cb).toThrowError(err)
    })

    it("should throw an error if 'details' is not a string", () => {
        const cb = () => new Project('Coffee Tin', 3, 5000, '8/17/2022', {}, {})
        const err = new Error(
            "Expected parameter 'details' to be a non-empty string"
        )

        expect(cb).toThrowError(err)
    })

    it("should throw an error if 'deadline' is not a date", () => {
        const cb = () =>
            new Project(
                'Coffee Tin',
                'a crowdfunding app',
                5000,
                'some time',
                {},
                {}
            )

        expect(cb).toThrow()
    })
})
