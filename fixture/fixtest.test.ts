import {test} from "./myFixture"

test("fixture demo", async ({ age, email }) => {
    console.log(age, email);
})