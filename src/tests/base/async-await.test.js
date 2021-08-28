import { getImage } from "../../base/async-await"


describe('Testing - Asynchronous Functions', ()=>{
    test('should a valid url', async () => {
        let url = await getImage();
        expect(url.includes('https://')).toBe(true);
    })
    
} )