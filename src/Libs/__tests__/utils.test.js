

import greetings from "../utils";

it('test greetings() function', () => {
    const result = greetings("Chiara");
    expect(result).toBe("Hello Chiara");
})