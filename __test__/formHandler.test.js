import { handleSubmit } from '../src/client/js/formHandler.js'

describe("Testing the submit functionality", () => {
    test("Testing that the function is defined", () => {
        expect(handleSubmit).toBeDefined()
    })
})
