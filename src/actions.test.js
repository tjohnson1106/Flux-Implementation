const actions = require("./actions")
// @ponicode
describe("actions.increment", () => {
    test("0", () => {
        let callFunction = () => {
            actions.increment()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.decrement", () => {
    test("0", () => {
        let callFunction = () => {
            actions.decrement()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.zero", () => {
    test("0", () => {
        let callFunction = () => {
            actions.zero()
        }
    
        expect(callFunction).not.toThrow()
    })
})
