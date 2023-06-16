import { test as myTest} from "@playwright/test";

type vlad = {
    age: number,
    email: string
}
const myFixtureTest = myTest.extend<vlad>({
    age: 28,
    email: "Vlad@gmail.com"
});

export const test = myFixtureTest;