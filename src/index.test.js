import { describe, expect, test } from "@jest/globals";
import meow from "./ship";

test('setup works',()=>{
    expect(meow()).toBe('meow');
})