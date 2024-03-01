import { convertDate } from '../../src/helpers/convertDate';

describe('Test to [convertDate.ts]', () => {  

    test('Should format the date and return a date string', () => {  

        const dateTest = new Date( '2024-02-28 17:16:45.902061' );

        const formattedDate = convertDate( dateTest );

        expect( typeof formattedDate ).toBe( "string" );
        expect( formattedDate ).toContain( "28/2/2024" );

    });

});