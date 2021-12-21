import {add} from "../controllers/serviceController";

describe('worked', () => {
    it('should return 15', () => {
        expect(add(1, 2)).toBe(3)
    });
});