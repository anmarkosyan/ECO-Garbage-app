import {add} from "../controllers/serviceController";
//console.log(jest);

describe('!!! Add testing for functions', () => {
    it('should return 3', () => {
        const result = add(1, 2);
        expect(result).toBe(3);
        //expect(result).not.toBe(15); => worse cases
        //expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });  => need to be strong equal for objects and arrays
        //expect(result).toMatch('') =>  only work with string and regx
        //expect(['a', 'b', 'c']).toContain('b');
    });
});

describe('should return null if input number more then 10', () => {
    //const result = add(10, 2);
    //expect(result).toBeNull(); => for checking null
    expect(()=> add(10, 2)).toThrow('input');
});

test.todo('add testing for http methods')