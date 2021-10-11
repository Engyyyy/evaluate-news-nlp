import { validateInput } from '../src/client/js/inputValidator.js'

describe("Testing the input validator functionality", () => {
    test("Testing that the validator returns true on valid URLs", () => {
        expect(validateInput('https://en.wikipedia.org/wiki/Main_Page')).toBe(true)
        expect(validateInput('https://www.nature.com/articles/s41586-021-03958-6')).toBe(true)
        expect(validateInput('https://www.entrepreneur.com/article/379817')).toBe(true)
    })
    test("Testing that the validator returns false on invalid URLs", () => {
        expect(validateInput('abc')).toBe(false)
        expect(validateInput('http:// www.en.wikipedia.org/wiki/Main_Page')).toBe(false)
        expect(validateInput('www.google.com')).toBe(false)
    })
})
